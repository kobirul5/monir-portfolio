
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Mail, MapPin, Phone, Link, Dribbble, Linkedin, Facebook } from "lucide-react"
import { Textarea } from "@/components/ui/Textarea"
import ContactImage from "@/assets/images/get.png"

// Zod Schema: ফর্মের ভ্যালিডেশন
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name is required." }).max(50),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500),
})

export function ContactMe() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values : z.infer<typeof formSchema>) {
    // এখানে আপনার ফর্ম সাবমিশন লজিক (যেমন API কল) যোগ করুন
    console.log("Form data submitted:", values)
    alert("Message Sent! Check console for data.")
    form.reset()
  }

  // Social Links ডেটা
  const socialLinks = [
    { icon: Dribbble, href: "#", color: "text-pink-500" },
    { icon: Linkedin, href: "#", color: "text-blue-500" },
    { icon: Facebook, href: "#", color: "text-blue-600" },
  ]
  
  // NOTE: I used Dribbble/Beaker as a placeholder for the Behance icon (Be)

  return (
    <section className=" text-white  flex items-center justify-center p-8">
      <div className="w-full container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* === Left Column: Contact Form and Social Links === */}
        <div className="space-y-10">
          
          {/* Contact Me Form */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-wider">
              CONTACT ME
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Full Name & Email (Inline) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className=" border-gray-700 text-white placeholder:text-gray-500 h-12"
                            {...field} 
                          />
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
                        <FormLabel className="text-lg font-semibold">Your Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="Email" 
                            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-12"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message Textarea */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write messages...."
                          className="resize-none bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button 
                    type="submit"
                    className="w-full sm:w-1/2 bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 text-white font-semibold py-3 rounded-full text-lg transition duration-300"
                >
                    Submit
                </Button>

              </form>
            </Form>
          </div>
          
          {/* Portfolio Link and Social Icons */}
          <div className="pt-4">
            <h3 className="text-2xl font-extrabold tracking-wider mb-4 flex items-center">
                PORTFOLIO LINK <Link className="w-6 h-6 ml-2" />
            </h3>
            <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-gray-800 hover:opacity-80 transition ${link.color}`}
                    >
                        <link.icon className="w-6 h-6" />
                    </a>
                ))}
            </div>
          </div>
        </div>

        {/* === Right Column: Contact Info === */}
        <div className="flex flex-col justify-center">
            <div>
              <img src={ContactImage} alt="" />
            </div>
            
            <div className="space-y-6 text-xl mt-8">
                <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-green-500" />
                    <span className="text-gray-300">01602725303</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-red-500" />
                    <span className="text-gray-300">montaeuiux@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                    <span className="text-gray-300">Tangail, Dhaka-Bangladesh</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}