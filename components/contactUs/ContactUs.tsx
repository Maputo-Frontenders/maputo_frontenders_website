"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import Avatar from "@/public/cute-avatar.svg";

const formSchema = z.object({
  name: z.string().min(1, { message: "Este é um campo obrigatório!" }),
  email: z
    .string()
    .email({ message: "E-mail invalido" })
    .min(1, { message: "Este é um campo obrigatório!" }),
  message: z
    .string()
    .min(1, { message: "Este é um campo obrigatório!" })
    .max(255, {
      message: "Atingiu o limite de caracteres, use no máximo 255 caracteres!",
    }),
});

export const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full py-8 bg-mf-least container grid grid-cols-1 gap-8 md:grid-cols-2 md:p-[72px] rounded-2xl md:gap-32">
      <div className="text-white flex flex-row md:flex-col gap-4">
        <Image src={Avatar} alt="contact avatar" width={100} height={100} />
        <div className="space-y-2">
          <h3 className="font-semibold text-mf-secondProposal">
            Estou sem ideia de titulo
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            laborum! Repellat commodi tempora nulla at.
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Introduza o seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Introduza o seu e-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="A sua mensagem." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </div>
  );
};
