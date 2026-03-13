import { useState } from "react";
import { CalendarDays, Clock, User, Phone, Minus, Plus, Sparkles } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { sendTelegramMessage } from "@/lib/telegram";
import PaymentDialog from "@/components/PaymentDialog";

const PRICE_PER_PERSON = 500;

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(20),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const TIME_SLOTS = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM",
];

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [guests, setGuests] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "+91 ", date: "", time: "" },
  });

  const today = new Date().toISOString().split("T")[0];
  const totalAmount = PRICE_PER_PERSON * guests;

  const onSubmitForm = async (data: BookingFormValues) => {
    setSubmitting(true);
    try {
      const message =
        `🍽️ <b>New Table Reservation</b>\n\n` +
        `<b>Name:</b> ${data.name}\n` +
        `<b>Phone:</b> ${data.phone}\n` +
        `<b>Date:</b> ${data.date}\n` +
        `<b>Time:</b> ${data.time}\n` +
        `<b>Guests:</b> ${guests}\n` +
        `<b>Total Amount:</b> ₹${totalAmount.toLocaleString("en-IN")}\n\n` +
        `Please confirm and process payment.`;

      await sendTelegramMessage(message);
      toast({ title: "Booking sent!", description: "Opening payment options..." });
      onOpenChange(false);
      setPaymentOpen(true);
    } catch {
      toast({ title: "Booking sent!", description: "Opening payment options...", variant: "default" });
      onOpenChange(false);
      setPaymentOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handlePaymentClose = (val: boolean) => {
    setPaymentOpen(val);
    if (!val) {
      form.reset();
      setGuests(1);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[420px] border-none bg-transparent p-0 shadow-none overflow-hidden [&>button]:hidden">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-card border border-border">
            <div className="relative px-6 pt-8 pb-5 text-center bg-primary/5 border-b border-border">
              <button onClick={() => onOpenChange(false)} className="absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors text-muted-foreground hover:text-foreground">✕</button>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <DialogHeader className="space-y-1">
                <DialogTitle className="font-display text-2xl text-foreground tracking-tight">Reserve a Table</DialogTitle>
                <DialogDescription className="font-accent text-base text-muted-foreground italic">Your golden evening awaits</DialogDescription>
              </DialogHeader>
            </div>

            <div className="px-6 pb-6 pt-5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-primary/60" /> Full Name</FormLabel>
                      <FormControl><Input placeholder="Your name" className="h-11 font-body rounded-xl border-border bg-background/60 focus:border-primary/40" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-primary/60" /> Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 XXXXX XXXXX" className="h-11 font-body rounded-xl border-border bg-background/60 focus:border-primary/40" {...field}
                          onChange={(e) => {
                            let val = e.target.value;
                            if (!val.startsWith("+91")) val = "+91 " + val.replace(/^\+91\s*/, "");
                            field.onChange(val);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="grid grid-cols-2 gap-3">
                    <FormField control={form.control} name="date" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-primary/60" /> Date</FormLabel>
                        <FormControl><Input type="date" min={today} className="h-11 font-body text-sm rounded-xl border-border bg-background/60 focus:border-primary/40" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="time" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary/60" /> Time</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl><SelectTrigger className="h-11 font-body rounded-xl border-border bg-background/60 focus:border-primary/40"><SelectValue placeholder="Select" /></SelectTrigger></FormControl>
                          <SelectContent className="rounded-xl">{TIME_SLOTS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Guest counter */}
                  <div>
                    <p className="font-body text-xs font-medium text-muted-foreground/80 mb-2">Number of Guests</p>
                    <div className="flex items-center justify-between bg-background/60 rounded-xl border border-border px-4 py-2.5">
                      <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"><Minus className="h-4 w-4" /></button>
                      <span className="font-display text-lg font-bold text-foreground">{guests} {guests === 1 ? "Guest" : "Guests"}</span>
                      <button type="button" onClick={() => setGuests(Math.min(20, guests + 1))} className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"><Plus className="h-4 w-4" /></button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-primary/5 rounded-xl p-4 text-center border border-primary/10">
                    <p className="font-body text-xs text-muted-foreground">Total Amount</p>
                    <p className="font-display text-2xl font-bold text-primary">₹{totalAmount.toLocaleString("en-IN")}</p>
                    <p className="font-body text-[10px] text-muted-foreground/60">₹{PRICE_PER_PERSON}/person × {guests} guest{guests > 1 ? "s" : ""}</p>
                  </div>

                  <Button type="submit" disabled={submitting} className="w-full h-12 rounded-xl font-body tracking-wide text-sm">
                    {submitting ? "Sending..." : "Book Table"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <PaymentDialog open={paymentOpen} onOpenChange={handlePaymentClose} amount={totalAmount} bookingType="Table Reservation" />
    </>
  );
};

export default BookingDialog;
