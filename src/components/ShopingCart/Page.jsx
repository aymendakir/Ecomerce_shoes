"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import MethodPayment from "./MethodePayment";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import { Label } from "@/components/ui/label";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Loader } from "lucide-react";

const formSchema = z.object({
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  CIN: z.string().min(3, { message: "CIN must be at least 3 characters." }),
  email: z
    .string()
    .min(5, { message: "email must be at least 5 and @ characters." }),
  telephone: z
    .string()
    .min(9, { message: "telephone must be at least 9 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  payment: z.string().min(5, { message: "Payment method must be selected." }),
});

function Page() {
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) {
    window.location.href = "/";
  }
  const navigate = useNavigate();
  const [datacart, setDatacart] = useState([]);
  const [valuePayment, setvaluePayment] = useState("");
  const [totalAmount, setTotalAmount] = useState();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      city: "",
      CIN: "",
      address: "",
      email: "",
      telephone: "",
      payment: "",
    },
    resolver: zodResolver(formSchema),
  });
  const stripe = useStripe();
  const elements = useElements();
  console.log(user);
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setDatacart(storedProducts);
  }, []);

  useEffect(() => {
    const storedProducts =
      JSON.parse(sessionStorage.getItem("OrderProducts")) || [];

    const totalAmounts = storedProducts?.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalAmount(totalAmounts);
  }, []);
  const handleCalculation = () => {
    // Logic for what to do when quantity changes
    const storedProducts =
      JSON.parse(sessionStorage.getItem("OrderProducts")) || [];

    const totalAmounts = storedProducts.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalAmount(totalAmounts); // Optionally, recalculate totals or update state here
  };

  // Stripe payment submission handler
  const handleStripePayment = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:3001/payment", {
          amount: totalAmount * 100, // Convert to cents for Stripe
          id,
          orderDetails: datacart,
          user: user,
        });

        if (response.data.success) {
          saveOrder(response.data.order); // Save order in backend
        }
      } catch (error) {
        console.error("Error with Stripe payment", error);
        setLoading(false);
      }
    } else {
      console.error("Stripe error:", error.message);
      setLoading(false);
    }
  };

  // PayPal payment handlers
  const handleApprove = async (data, actions) => {
    const order = await actions.order.capture();

    saveOrder(order); // Save order in backend
  };

  const handleError = (error) => {
    console.error("Payment error:", error);
    setLoading(false);
  };

  const handleCancel = (data) => {
    console.log("Payment canceled:", data);
    setLoading(false);
  };
  //save costumer
  const saveCostumer = async () => {
    const response = await axios.get(
      `http://localhost:3001/costumer/${user.id}`
    );

    if (response.data.response[0].costumer_id !== user.id) {
      const response = await axios.post("http://localhost:3001/costumer", {
        costumer_id: user.id,
        username: user.fullName,
        email: user.emailAddresses[0].emailAddress,
        first_name: user.firstName,
        last_name: user.lastName,
        address: form.getValues("address"),
        city: form.getValues("city"),
        postal_code: "26100",
        country: "morocco",
        phone_number: form.getValues("telephone"),
      });
      if (response.data.success) {
        console.log("Costumer saved");
      }
    }
  };
  // Save order to backend
  const saveOrder = async (orderData) => {
    try {
      const response = await axios
        .post("http://localhost:3001/order", {
          costumer_id: user.id,

          total_amount: totalAmount,
          paymentInfo: orderData,
          city: form.getValues("city"),
          address: form.getValues("address"),
          telephone: form.getValues("telephone"),
          email: form.getValues("email"),
          cin: form.getValues("CIN"),

          orderItems: JSON.stringify(datacart),
        })
        .then((res) => {
          if (res.data.success) {
            console.log("Order saved successfully", res.data);
            location.href = `/Thank-you/${res.data.orderId}`;
            sessionStorage.removeItem("OrderProducts");
            localStorage.removeItem("products");
          }
        });
    } catch (error) {
      console.error("Failed to save order:", error);
      setLoading(false);
    }
  };

  // Form submission handler
  const onSubmit = async (values) => {
    saveCostumer();
    setLoading(true);
    window.sessionStorage.setItem("data-order", JSON.stringify(values));

    if (valuePayment === "card payment") {
      await handleStripePayment();
    }
  };

  return (
    <header className="my-4">
      <Navigation />
      <section>
        <div className="w-[90%] flex justify-between mx-auto mt-20 gap-20">
          <div className="w-1/2">
            <h1 className="text-3xl capitalize font-mono font-bold mb-4">
              Order summary
            </h1>
            <hr className="text-gray-400 bg-gray-400/20  h-0.5"></hr>
            <div className="flex flex-col">
              {datacart.length > 0 ? (
                datacart.map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    onCalcul={handleCalculation}
                  />
                ))
              ) : (
                <div className="text-center text-gray-400 text-lg font-bold mt-10">
                  Your cart is empty
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2 relative">
            <h1 className="text-3xl capitalize font-mono font-bold mb-4">
              Order summary
            </h1>
            <hr className="text-gray-400 bg-gray-400/20  h-0.5"></hr>
            <p className="absolute right-0 top-2 text-xl font-medium">
              {datacart.length} Items
            </p>
            <div className="mt-8 flex flex-col">
              <div className="max-h-[240px] w-[95%] rounded-[13px] border border-gray-300/50 flex flex-col gap-3">
                <div className="flex justify-between text-xl mx-6 mt-7 ">
                  <p className="text-gray-400 capitalize ">subtotal:</p>
                  <p className="text-black text-xl font-bold font-mono">
                    ${totalAmount}
                  </p>
                </div>
                <div className="flex justify-between text-xl mx-6 mt-3">
                  <p className="text-gray-400 capitalize ">delivery:</p>
                  <p className="text-black text-xl font-bold font-mono">$0</p>
                </div>
                <hr className="bg-gray-300/50 h-0.5 my-3 w-[90%] mx-auto"></hr>
                <div className="flex justify-between text-xl mx-6  mb-7 ">
                  <p className="text-gray-400 capitalize ">total:</p>
                  <p className="text-black text-xl font-bold font-mono">
                    ${totalAmount}
                  </p>
                </div>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 mt-7 w-full font-mono"
                >
                  <div className="flex justify-between w-full gap-5">
                    <FormField
                      control={form.control}
                      className="w-full"
                      name="city"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel className="font-mono text-black/70">
                            City
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="City"
                              {...field}
                              className="py-5 !w-full text-lg placeholder:text-lg font-mono !text-gray-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="CIN"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel className="font-mono text-black/70">
                            CIN
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="CIN"
                              {...field}
                              className="py-5  text-lg placeholder:text-lg !text-gray-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-black/70">
                          Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Address"
                            {...field}
                            className="py-5  text-lg placeholder:text-lg !text-gray-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between w-full gap-5">
                    <FormField
                      control={form.control}
                      className="w-full"
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel className="font-mono text-black/70">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              {...field}
                              className="py-5 !w-full text-lg placeholder:text-lg font-mono !text-gray-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="telephone"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel className="font-mono text-black/70">
                            Telephone
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Telephone"
                              {...field}
                              className="py-5  text-lg placeholder:text-lg !text-gray-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <MethodPayment
                    {...form.register("payment")}
                    onclick={(value) => {
                      form.setValue("payment", value);
                      setvaluePayment(value);
                    }}
                  />
                  {/* Stripe Payment Elements */}
                  {valuePayment === "card payment" && (
                    <div className="mt-6 border border-gray-300 rounded-lg p-4">
                      <CardNumberElement
                        options={{ showIcon: true }}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg "
                      />
                      <CardExpiryElement className="w-full p-3 mb-4 border border-gray-300 rounded-lg" />
                      <CardCvcElement className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                  )}

                  {/* PayPal Payment Button */}
                  {valuePayment === "Paypal payment" &&
                    form.formState.isValid && (
                      <div className="mt-6">
                        <PayPalButtons
                          style={{ layout: "vertical" }}
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [
                                {
                                  amount: {
                                    value: totalAmount.toFixed(2),
                                  },
                                },
                              ],
                            });
                          }}
                          onApprove={handleApprove}
                          onError={handleError}
                          onCancel={handleCancel}
                        />
                      </div>
                    )}

                  <button
                    disabled={
                      !form.formState.isDirty || form.formState.submitCount > 2
                    }
                    type="submit"
                    className={` w-full h-16 rounded-md flex items-center justify-center space-x-4 ${
                      !form.formState.isDirty || form.formState.submitCount > 2
                        ? "bg-black/40"
                        : "bg-black"
                    }`}
                  >
                    <Loader
                      className={`animate-spin text-white ${
                        loading ? "" : "hidden"
                      }`}
                    />
                    <span className="text-xl font-mono text-white">
                      Continue
                    </span>
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Page;
