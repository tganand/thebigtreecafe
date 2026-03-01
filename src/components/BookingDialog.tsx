import { useState } from "react";
import { MessageCircle, CalendarDays, Users, Clock, User, Phone, Sparkles } from "lucide-react";
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

const WHATSAPP_NUMBER = "916377598501";

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
      <DialogContent className="sm:max-w-[420px] border-none bg-transparent p-0 shadow-none overflow-hidden [&>button]:hidden">
        <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(165deg, hsl(38 40% 97%), hsl(38 33% 93%))' }}>
          {/* Soft gradient header */}
          <div className="relative px-6 pt-8 pb-5 text-center" style={{ background: 'linear-gradient(135deg, hsl(36 72% 48% / 0.08), hsl(15 60% 38% / 0.06))' }}>
            <div className="absolute top-3 right-3">
              <button
                onClick={() => onOpenChange(false)}
                className="h-8 w-8 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <DialogHeader className="space-y-1">
              <DialogTitle className="font-display text-2xl text-foreground tracking-tight">
                Reserve a Table
              </DialogTitle>
              <DialogDescription className="font-accent text-base text-muted-foreground italic">
                Your golden evening awaits
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Form body */}
          <div className="px-6 pb-6 pt-5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-4">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5 mb-1">
                        <User className="h-3.5 w-3.5 text-primary/60" /> Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="h-11 font-body rounded-xl border-secondary bg-background/60 focus:bg-background focus:border-primary/40 transition-all placeholder:text-muted-foreground/40"
                          {...field}
                        />
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
                      <FormLabel className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5 mb-1">
                        <Phone className="h-3.5 w-3.5 text-primary/60" /> Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+91 XXXXX XXXXX"
                          className="h-11 font-body rounded-xl border-secondary bg-background/60 focus:bg-background focus:border-primary/40 transition-all placeholder:text-muted-foreground/40"
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

                {/* Date & Guests */}
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="min-w-0">
                        <FormLabel className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5 mb-1">
                          <CalendarDays className="h-3.5 w-3.5 text-primary/60" /> Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            min={today}
                            className="h-11 font-body text-sm rounded-xl border-secondary bg-background/60 focus:bg-background focus:border-primary/40 transition-all"
                            {...field}
                          />
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
                        <FormLabel className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5 mb-1">
                          <Users className="h-3.5 w-3.5 text-primary/60" /> Guests
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 font-body rounded-xl border-secondary bg-background/60 focus:bg-background focus:border-primary/40 transition-all">
                              <SelectValue placeholder="How many?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-xl">
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
                      <FormLabel className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5 mb-1">
                        <Clock className="h-3.5 w-3.5 text-primary/60" /> Preferred Time
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-11 font-body rounded-xl border-secondary bg-background/60 focus:bg-background focus:border-primary/40 transition-all">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-xl">
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
                  className="w-full h-12 rounded-xl font-body tracking-wide text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-2"
                  style={{
                    background: 'linear-gradient(135deg, hsl(36 72% 48%), hsl(36 72% 40%))',
                    color: 'hsl(38 33% 96%)',
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {submitted ? "Sending…" : "Book via WhatsApp"}
                </Button>
              </form>
            </Form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-secondary" />
              <span className="font-accent text-xs text-muted-foreground/60 italic">or chat directly</span>
              <div className="flex-1 h-px bg-secondary" />
            </div>

            {/* Quick WhatsApp */}
            <button
              onClick={handleWhatsAppDirect}
              className="w-full h-11 rounded-xl font-body text-xs tracking-wide flex items-center justify-center gap-2 border border-secondary bg-background/40 text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
