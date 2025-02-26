"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import axios from "axios"

// Declare grecaptcha as a global variable
declare const grecaptcha: {
    execute(siteKey: string, options: { action: string }): Promise<string>
}
import { Loader2 } from "lucide-react"

// API URL & reCAPTCHA Key from ENV
const API_URL = process.env.NEXT_PUBLIC_API_URL
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    useEffect(() => {
        // Load reCAPTCHA script
        const script = document.createElement("script")
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
        script.async = true
        script.defer = true
        document.body.appendChild(script)
    }, [])

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsSubmitting(true)

            // Execute reCAPTCHA
            if (!RECAPTCHA_SITE_KEY) {
                throw new Error("reCAPTCHA site key is not defined.")
            }
            const recaptchaToken = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" })

            if (!recaptchaToken) {
                throw new Error("Failed to verify reCAPTCHA. Please try again.")
            }

            // Send form data with reCAPTCHA token
            const response = await axios.post(`${API_URL}/contact`, {
                ...values,
                recaptchaToken, // Include reCAPTCHA token
            })

            if (response.status === 200) {
                form.reset()
                toast.success("Message sent successfully!", {
                    description: "I'll get back to you as soon as possible.",
                })
            } else {
                throw new Error("An unknown error occurred.")
            }
        } catch (error) {
            console.error(error)
            toast.error("An error occurred. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-background/50 p-6 rounded-lg shadow-lg">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input className="border border-border focus:ring-primary focus:border-primary transition-shadow" placeholder="Your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input className="border border-border focus:ring-primary focus:border-primary transition-shadow" placeholder="Your email" {...field} />
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea className="border border-border focus:ring-primary focus:border-primary transition-shadow resize-none" placeholder="Your message" rows={5} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send Message"}
                </Button>
            </form>
        </Form>
    )
}

export default ContactForm
