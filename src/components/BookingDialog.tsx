import { useState } from "react";
import { MessageCircle, CalendarDays, Users, Clock, User, Phone } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  guests: z.string().min(1, "Please select number of guests"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const TIME_SLOTS = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM",
  "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
  "9:00 PM", "10:00 PM",
];

const WHATSAPP_NUMBER = "917038712305";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", date: "", time: "", guests: "" },
  });

  const today = new Date().toISOString().split("T")[0];

  const buildWhatsAppMessage = (data: BookingFormValues) => {
    return encodeURIComponent(
      `Hello,\n\n` +
      `I would like to book a table.\n\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Date: ${data.date}\n` +
      `Time: ${data.time}\n` +
      `Guests: ${data.guests}\n\n` +
      `Please confirm availability.`
    );
  };

  const onSubmitForm = (data: BookingFormValues) => {
    const message = buildWhatsAppMessage(data);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
    toast({
      title: "Booking request sent!",
      description: "We'll confirm your reservation via WhatsApp shortly.",
    });
    setTimeout(() => {
      onOpenChange(false);
      setSubmitted(false);
      form.reset();
    }, 2000);
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to make a table reservation at The Big Tree Cafe. Could you please help me?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border p-0 overflow-hidden">
        {/* Decorative header */}
        <div className="bg-primary/10 px-6 pt-6 pb-4 border-b border-primary/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-px w-8 bg-primary/40" />
            <CalendarDays className="h-5 w-5 text-primary" />
            <div className="h-px w-8 bg-primary/40" />
          </div>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground text-center">
              Reserve a Table
            </DialogTitle>
            <DialogDescription className="font-body text-muted-foreground text-center text-sm">
              Fill in your details and we'll confirm via WhatsApp
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 pb-6 pt-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <User className="h-3 w-3 text-primary" /> Full Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" className="h-11 font-body" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Phone className="h-3 w-3 text-primary" /> Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+91 XXXXX XXXXX"
                        className="h-11 font-body"
                        {...field}
                        onChange={(e) => {
                          let val = e.target.value;
                          if (val.length > 0 && !val.startsWith("+")) {
                            val = "+" + val;
                          }
                          field.onChange(val);
                        }}
                        onFocus={() => {
                          if (!field.value) field.onChange("+");
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date & Guests row - equal sizing */}
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="min-w-0">
                      <FormLabel className="font-body text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <CalendarDays className="h-3 w-3 text-primary" /> Date
                      </FormLabel>
                      <FormControl>
                        <Input type="date" min={today} className="h-11 font-body text-sm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem className="min-w-0">
                      <FormLabel className="font-body text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Users className="h-3 w-3 text-primary" /> Guests
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-11 font-body">
                            <SelectValue placeholder="How many?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <SelectItem key={n} value={String(n)}>
                              {n} {n === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                          <SelectItem value="9+">9+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Time */}
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-primary" /> Preferred Time
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-11 font-body">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TIME_SLOTS.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                disabled={submitted}
                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-widest uppercase text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {submitted ? "Sending…" : "Book via WhatsApp"}
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-border" />
            <span className="font-body text-[10px] text-muted-foreground uppercase tracking-[0.2em]">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Quick WhatsApp button */}
          <Button
            variant="outline"
            className="w-full h-11 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary font-body tracking-widest uppercase text-xs rounded-lg transition-all duration-200"
            onClick={handleWhatsAppDirect}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat on WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
