import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TreePine, ArrowLeft, CalendarDays, User, Phone, Minus, Plus, Clock } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { sendTelegramMessage } from "@/lib/telegram";
import PaymentDialog from "@/components/PaymentDialog";

import camelSafariImg from "@/assets/activities/camel-safari.jpg";
import jeepSafariImg from "@/assets/activities/jeep-safari.jpg";
import desertCampImg from "@/assets/activities/desert-camp.jpg";
import sightseeingImg from "@/assets/activities/sightseeing.jpg";
import adventureImg from "@/assets/activities/adventure.jpg";
import exoticToursImg from "@/assets/activities/exotic-tours.jpg";
import specialEventsImg from "@/assets/activities/special-events.jpg";

const activities = [
  {
    id: "camel-safari",
    title: "Camel Safari",
    description: "Ride through the golden Thar dunes on a traditional camel safari. Experience the timeless charm of desert travel with expert guides.",
    price: 800,
    duration: "2-3 hours",
    includes: ["Expert guide", "Water & snacks", "Sunset views", "Photo stops"],
    image: camelSafariImg,
  },
  {
    id: "jeep-safari",
    title: "Jeep Safari",
    description: "Thrilling 4x4 ride across sand dunes and desert trails. Perfect for adventure seekers wanting to cover more ground.",
    price: 1500,
    duration: "3-4 hours",
    includes: ["4x4 vehicle", "Professional driver", "Refreshments", "Village stops"],
    image: jeepSafariImg,
  },
  {
    id: "desert-camp",
    title: "Desert Camp",
    description: "Overnight glamping under a million stars. Enjoy bonfire, folk music, and authentic Rajasthani dinner in the heart of the Thar.",
    price: 2500,
    duration: "Overnight",
    includes: ["Tent accommodation", "Dinner & breakfast", "Bonfire", "Folk music & dance"],
    image: desertCampImg,
  },
  {
    id: "sightseeing",
    title: "Sightseeing Tour",
    description: "Explore Jaisalmer's magnificent fort, havelis, temples, and hidden gems with a knowledgeable local guide.",
    price: 1000,
    duration: "4-5 hours",
    includes: ["Local guide", "Fort & Haveli visits", "Temple tour", "Transport"],
    image: sightseeingImg,
  },
  {
    id: "adventure",
    title: "Adventure & Dune Bashing",
    description: "High-adrenaline quad biking and dune bashing across the Thar desert. An unforgettable thrill ride on golden sands.",
    price: 1200,
    duration: "2 hours",
    includes: ["Quad bike / ATV", "Safety gear", "Instructor", "Refreshments"],
    image: adventureImg,
  },
  {
    id: "exotic-tours",
    title: "Exotic Cultural Tours",
    description: "Immerse yourself in Rajasthan's vibrant culture — folk dance performances, village visits, traditional craft workshops, and more.",
    price: 3000,
    duration: "Full day",
    includes: ["Cultural performances", "Village visit", "Traditional lunch", "Craft workshop"],
    image: exoticToursImg,
  },
  {
    id: "special-events",
    title: "Special Events",
    description: "Private desert celebrations — weddings, anniversaries, or exclusive parties under the starlit Rajasthani sky with full arrangements.",
    price: 5000,
    duration: "Custom",
    includes: ["Custom decoration", "Catering", "Entertainment", "Photography"],
    image: specialEventsImg,
  },
];

const DesertSafari = () => {
  const navigate = useNavigate();
  const [bookingActivity, setBookingActivity] = useState<typeof activities[0] | null>(null);
  const [guests, setGuests] = useState(1);
  const [formData, setFormData] = useState({ name: "", phone: "+91 ", date: "" });
  const [submitting, setSubmitting] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const today = new Date().toISOString().split("T")[0];
  const totalAmount = bookingActivity ? bookingActivity.price * guests : 0;

  const handleBook = async () => {
    if (!bookingActivity || !formData.name || !formData.phone || !formData.date) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const message =
        `🏜️ <b>New Desert Safari Booking</b>\n\n` +
        `<b>Activity:</b> ${bookingActivity.title}\n` +
        `<b>Name:</b> ${formData.name}\n` +
        `<b>Phone:</b> ${formData.phone}\n` +
        `<b>Date:</b> ${formData.date}\n` +
        `<b>Guests:</b> ${guests}\n` +
        `<b>Price per person:</b> ₹${bookingActivity.price.toLocaleString("en-IN")}\n` +
        `<b>Total Amount:</b> ₹${totalAmount.toLocaleString("en-IN")}\n\n` +
        `Please confirm and process payment.`;

      await sendTelegramMessage(message);
    } catch { /* continue to payment */ }

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
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-desert-brown/90 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <button onClick={() => navigate("/")} className="text-gold hover:text-gold-light transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <TreePine className="h-5 w-5 text-gold" />
            <span className="font-display text-lg font-bold text-gold">Desert Safari</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <img src={camelSafariImg} alt="Desert Safari" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-light/80 mb-2">Explore the Thar Desert</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">Desert Safari Adventures</h1>
          <p className="font-body text-white/70 max-w-lg">Choose from our curated desert experiences and create memories that last a lifetime.</p>
        </div>
      </div>

      {/* Activity Grid */}
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
                <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">{activity.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {activity.includes.map((item) => (
                    <span key={item} className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-body rounded-full">{item}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-xl font-bold text-foreground">₹{activity.price.toLocaleString("en-IN")}</span>
                    <span className="font-body text-xs text-muted-foreground">/person</span>
                  </div>
                  <Button onClick={() => { setBookingActivity(activity); resetForm(); }} size="sm" className="rounded-xl font-body text-xs">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={!!bookingActivity} onOpenChange={(v) => !v && setBookingActivity(null)}>
        <DialogContent className="sm:max-w-[420px] border-none bg-transparent p-0 shadow-none [&>button]:hidden">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-card border border-border">
            <div className="relative px-6 pt-7 pb-4 text-center bg-primary/5 border-b border-border">
              <button onClick={() => setBookingActivity(null)} className="absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors text-muted-foreground">✕</button>
              <h3 className="font-display text-xl font-bold text-foreground">{bookingActivity?.title}</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">₹{bookingActivity?.price.toLocaleString("en-IN")}/person · {bookingActivity?.duration}</p>
            </div>
            <div className="px-6 pb-6 pt-5 space-y-4">
              <div>
                <label className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5 mb-1.5"><User className="h-3.5 w-3.5 text-primary/60" /> Full Name</label>
                <Input placeholder="Your name" className="h-11 rounded-xl border-border" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5 mb-1.5"><Phone className="h-3.5 w-3.5 text-primary/60" /> Phone Number</label>
                <Input placeholder="+91 XXXXX XXXXX" className="h-11 rounded-xl border-border" value={formData.phone}
                  onChange={(e) => {
                    let val = e.target.value;
                    if (!val.startsWith("+91")) val = "+91 " + val.replace(/^\+91\s*/, "");
                    setFormData({ ...formData, phone: val });
                  }}
                />
              </div>
              <div>
                <label className="font-body text-xs font-medium text-muted-foreground/80 flex items-center gap-1.5 mb-1.5"><CalendarDays className="h-3.5 w-3.5 text-primary/60" /> Date</label>
                <Input type="date" min={today} className="h-11 rounded-xl border-border" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
              <div>
                <p className="font-body text-xs font-medium text-muted-foreground/80 mb-2">Number of Guests</p>
                <div className="flex items-center justify-between bg-background/60 rounded-xl border border-border px-4 py-2.5">
                  <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20"><Minus className="h-4 w-4" /></button>
                  <span className="font-display text-lg font-bold text-foreground">{guests} {guests === 1 ? "Guest" : "Guests"}</span>
                  <button type="button" onClick={() => setGuests(Math.min(20, guests + 1))} className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
              <div className="bg-primary/5 rounded-xl p-4 text-center border border-primary/10">
                <p className="font-body text-xs text-muted-foreground">Total Amount</p>
                <p className="font-display text-2xl font-bold text-primary">₹{totalAmount.toLocaleString("en-IN")}</p>
                <p className="font-body text-[10px] text-muted-foreground/60">₹{bookingActivity?.price.toLocaleString("en-IN")}/person × {guests} guest{guests > 1 ? "s" : ""}</p>
              </div>
              <Button onClick={handleBook} disabled={submitting} className="w-full h-12 rounded-xl font-body tracking-wide text-sm">
                {submitting ? "Sending..." : "Book Now"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <PaymentDialog open={paymentOpen} onOpenChange={(v) => { setPaymentOpen(v); if (!v) resetForm(); }} amount={paymentAmount} bookingType="Desert Safari Booking" />
    </div>
  );
};

export default DesertSafari;
