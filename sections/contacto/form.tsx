"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DictionaryProps } from "@/lib/getDictionary";
import { useState } from "react";
import { toast } from "sonner";
import { useFormCooldown } from "@/hooks/useFormCooldown";

export function ContactForm({ intl }: { intl: DictionaryProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const { isInCooldown, startCooldown, formattedTime, minutesRemaining } =
    useFormCooldown();

  const formSchema = z.object({
    name: z
      .string({ required_error: intl.contact.form.validation.nameRequired })
      .min(2, {
        message: intl.contact.form.validation.nameMin,
      }),
    email: z
      .string({ required_error: intl.contact.form.validation.emailRequired })
      .email({
        message: intl.contact.form.validation.emailInvalid,
      }),
    message: z
      .string({ required_error: intl.contact.form.validation.messageRequired })
      .min(2, {
        message: intl.contact.form.validation.messageMin,
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (isInCooldown) {
      toast(
        intl.contact.form.cooldown.replace(
          "{{minutes}}",
          formattedTime?.toString() ?? minutesRemaining.toString()
        )
      );
      return;
    }

    setIsLoading(true);

    fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        startCooldown();
        toast(intl.contact.form.success);
        form.reset();
        return response.json();
      })
      .catch((error) => {
        toast(intl.contact.form.error);
        console.error("Fetch error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  flex flex-col gap-4 border border-mf-darkBlue bg-mf-background rounded-lg p-8 max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{intl.contact.form.name}</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{intl.contact.form.email}</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>{intl.contact.form.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={intl.contact.form.messagePlaceholder}
                  rows={8}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <Button
            type="submit"
            className="w-fit uppercase"
            withArrow
            disabled={isLoading || isInCooldown}
            isLoading={isLoading}
          >
            {intl.contact.form.submit}
          </Button>

          {isInCooldown && (
            <div className="text-sm text-mf-white/50">
              {intl.contact.form.cooldown.replace(
                "{{minutes}}",
                formattedTime?.toString() ?? minutesRemaining.toString()
              )}
            </div>
          )}
        </div>
      </form>
    </Form>
  );
}
