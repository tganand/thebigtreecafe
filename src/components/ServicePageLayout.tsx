import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays, User, Phone, Minus, Plus, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { sendTelegramMessage } from "@/lib/telegram";
import PaymentDialog from "@/components/PaymentDialog";

export interface ServiceActivity {
  id: string;
  title: string;
  description: string;
  price: number;
  priceLabel: string;
  fixedPrice?: boolean;
  nights?: number;
  duration: string;
  details: string[];
  image: string;
  minPeople?: number;
}

interface Props {
  icon: React.ReactNode;
  navTitle: string;
  heroImage: string;
  heroSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  activities: ServiceActivity[];
  bookingType: string;
}

const ServicePageLayout = ({
  icon, navTitle, heroImage, heroSubtitle, heroTitle, heroDescription, activities, bookingType,
}: Props) => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [bookingActivity, setBookingActivity] = useState<ServiceActivity | null>(null);
  const [guests, setGuests] = useState(1);
  const [formData, setFormData] = useState({ name: "", phone: "+91 ", date: "" });
  const [submitting, setSubmitting] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const today = new Date().toISOString().split("T")[0];

  const totalAmount = bookingActivity
    ? bookingActivity.fixedPrice
      ? bookingActivity.price
      : bookingActivity.nights
        ? bookingActivity.price * guests * bookingActivity.nights
        : bookingActivity.price * guests
    : 0;

  const handleBook = async () => {
    if (!bookingActivity || !formData.name || !formData.phone || !formData.date) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const detailsList = bookingActivity.details.map((d) => `  • ${d}`).join("\n");
      const message =
        `🏜️ <b>New ${bookingType} Booking</b>\n\n` +
        `👤 <b>Customer Details</b>\n` +
        `<b>Name:</b> ${formData.name}\n` +
        `<b>Phone:</b> ${formData.phone}\n` +
        `<b>Date:</b> ${formData.date}\n` +
        (!bookingActivity.fixedPrice ? `<b>Guests:</b> ${guests}\n` : "") +
        `<b>Total Amount:</b> ₹${totalAmount.toLocaleString("en-IN")}\n\n` +
        `📋 <b>Service Details</b>\n` +
        `<b>Service:</b> ${bookingActivity.title}\n` +
        `<b>Description:</b> ${bookingActivity.description}\n` +
        `<b>Price:</b> ₹${bookingActivity.price.toLocaleString("en-IN")} ${bookingActivity.priceLabel}\n\n` +
        `<b>Inclusions:</b>\n${detailsList}`;
      await sendTelegramMessage(message);
    } catch { /* continue */ }
    setPaymentAmount(totalAmount);
    setBookingActivity(null);
    setPaymentOpen(true);
    setSubmitting(false);
    toast({ title: "Booking sent!", description: "Opening payment options..." });
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "+91 ", date: "" });
    setGuests(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-desert-brown/90 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <button onClick={() => navigate("/#services")} className="text-gold hover:text-gold-light transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {icon}
            <span className="font-display text-lg font-bold text-gold">{navTitle}</span>
          </div>
        </div>
      </nav>

      <div className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <img src={heroImage} alt={heroTitle} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-light/80 mb-2">{heroSubtitle}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">{heroTitle}</h1>
          <p className="font-body text-white/70 max-w-lg">{heroDescription}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div key={activity.id} className="group rounded-3xl overflow-hidden border border-border bg-card shadow-md hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={activity.image} alt={activity.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display text-lg font-bold text-white">{activity.title}</h3>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-body mt-1">
                    <Clock className="h-3 w-3" /> {activity.duration}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-body text-sm text-muted-foreground mb-3">{activity.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {activity.details.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-xs text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-xl font-bold text-foreground">₹{activity.price.toLocaleString("en-IN")}</span>
                    <span className="font-body text-xs text-muted-foreground"> {activity.priceLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => {
                        setBookingActivity(activity);
                        resetForm();
                        setGuests(activity.minPeople || 1);
                      }}
                      size="sm"
                      className="rounded-xl font-body text-xs"
                    >
                      Book Now
                    </Button>
                    <a
                      href="tel:9251171605"
                      onClick={(e) => e.stopPropagation()}
                      className="h-9 w-9 rounded-xl bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors"
                      title="Call Now"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!bookingActivity} onOpenChange={(v) => !v && setBookingActivity(null)}>
        <DialogContent className="sm:max-w-[360px] border-none bg-transparent p-0 shadow-none [&>button]:hidden">
          <DialogTitle className="sr-only">{bookingActivity?.title ?? "Booking"}</DialogTitle>
          <DialogDescription className="sr-only">Book {bookingActivity?.title}</DialogDescription>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-card border border-border">
            <div className="relative px-5 pt-5 pb-3 text-center bg-primary/5 border-b border-border">
              <button onClick={() => setBookingActivity(null)} className="absolute top-2 right-2 h-7 w-7 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors text-muted-foreground hover:text-foreground text-sm">✕</button>
              <h3 className="font-display text-lg font-bold text-foreground">{bookingActivity?.title}</h3>
              <p className="font-body text-xs text-muted-foreground mt-0.5">
                ₹{bookingActivity?.price.toLocaleString("en-IN")} {bookingActivity?.priceLabel} · {bookingActivity?.duration}
              </p>
            </div>
            <div className="px-5 pb-4 pt-3 space-y-2.5">
              <div>
                <label className="font-body text-[11px] font-medium text-muted-foreground/80 flex items-center gap-1 mb-1">
                  <User className="h-3 w-3 text-primary/60" /> Full Name
                </label>
                <Input placeholder="Your name" className="h-9 text-sm rounded-lg border-border" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="font-body text-[11px] font-medium text-muted-foreground/80 flex items-center gap-1 mb-1">
                  <Phone className="h-3 w-3 text-primary/60" /> Phone Number
                </label>
                <Input
                  placeholder="+91 XXXXX XXXXX"
                  className="h-9 text-sm rounded-lg border-border"
                  value={formData.phone}
                  onChange={(e) => {
                    let val = e.target.value;
                    if (!val.startsWith("+91")) val = "+91 " + val.replace(/^\+91\s*/, "");
                    setFormData({ ...formData, phone: val });
                  }}
                />
              </div>
              <div>
                <label className="font-body text-[11px] font-medium text-muted-foreground/80 flex items-center gap-1 mb-1">
                  <CalendarDays className="h-3 w-3 text-primary/60" /> Date
                </label>
                <Input type="date" min={today} className="h-9 text-sm rounded-lg border-border" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
              {!bookingActivity?.fixedPrice && (
                <div>
                  <p className="font-body text-[11px] font-medium text-muted-foreground/80 mb-1.5">Number of Guests</p>
                  <div className="flex items-center justify-between bg-background/60 rounded-lg border border-border px-3 py-1.5">
                    <button type="button" onClick={() => setGuests(Math.max(bookingActivity?.minPeople || 1, guests - 1))} className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="font-display text-base font-bold text-foreground">{guests} {guests === 1 ? "Guest" : "Guests"}</span>
                    <button type="button" onClick={() => setGuests(Math.min(20, guests + 1))} className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  {bookingActivity?.minPeople && bookingActivity.minPeople > 1 && (
                    <p className="font-body text-[9px] text-muted-foreground/60 mt-0.5">Minimum {bookingActivity.minPeople} people required</p>
                  )}
                </div>
              )}
              <div className="bg-primary/5 rounded-lg p-2.5 text-center border border-primary/10">
                <p className="font-body text-[10px] text-muted-foreground">Total Amount</p>
                <p className="font-display text-xl font-bold text-primary">₹{totalAmount.toLocaleString("en-IN")}</p>
                {!bookingActivity?.fixedPrice && (
                  <p className="font-body text-[9px] text-muted-foreground/60">
                    ₹{bookingActivity?.price.toLocaleString("en-IN")} {bookingActivity?.priceLabel} × {guests} guest{guests > 1 ? "s" : ""}
                    {bookingActivity?.nights ? ` × ${bookingActivity.nights} night${bookingActivity.nights > 1 ? "s" : ""}` : ""}
                  </p>
                )}
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-2 text-center">
                <p className="font-body text-[10px] text-amber-700 dark:text-amber-400 leading-relaxed">
                  📞 After payment, our team will call you to confirm. Show payment proof at counter upon arrival.
                </p>
              </div>
              <Button onClick={handleBook} disabled={submitting} className="w-full h-10 rounded-lg font-body tracking-wide text-sm">
                {submitting ? "Sending..." : "Book Now"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <PaymentDialog
        open={paymentOpen}
        onOpenChange={(v) => { setPaymentOpen(v); if (!v) resetForm(); }}
        amount={paymentAmount}
        bookingType={`${bookingType} Booking`}
      />
    </div>
  );
};

export default ServicePageLayout;
