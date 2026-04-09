import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TreePine, ArrowLeft, CalendarDays, User, Phone, Minus, Plus, Wifi, Wind, Coffee, Eye, Users, Bed } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { sendTelegramMessage } from "@/lib/telegram";
import PaymentDialog from "@/components/PaymentDialog";

import heritageImg from "@/assets/rooms/heritage-room.webp";
import desertViewImg from "@/assets/rooms/desert-view.webp";
import royalSuiteImg from "@/assets/rooms/royal-suite.webp";
import familyRoomImg from "@/assets/rooms/family-room.webp";

const featureIcons: Record<string, React.ElementType> = {
  "WiFi": Wifi, "AC": Wind, "Breakfast": Coffee, "Desert View": Eye, "Fort View": Eye,
  "2 Beds": Bed, "Kids Area": Users, "Living Area": Bed, "Balcony": Eye, "Mini Bar": Coffee,
};

const rooms = [
  {
    id: "heritage",
    title: "Heritage Room",
    description: "A cozy room with traditional Rajasthani décor, ornate mirror, and warm ambient lighting. Perfect for solo travelers or couples.",
    price: 1500,
    perNight: true,
    features: ["AC", "WiFi", "Breakfast", "Fort View"],
    capacity: "2 Guests",
    image: heritageImg,
  },
  {
    id: "desert-view",
    title: "Desert View Room",
    description: "Wake up to panoramic desert views from your private balcony. Modern comfort meets traditional charm.",
    price: 2500,
    perNight: true,
    features: ["AC", "WiFi", "Breakfast", "Desert View", "Balcony"],
    capacity: "2 Guests",
    image: desertViewImg,
  },
  {
    id: "royal-suite",
    title: "Royal Suite",
    description: "Opulent suite with king-size bed, chandelier, and rich Rajasthani textiles. The ultimate heritage experience.",
    price: 4000,
    perNight: true,
    features: ["AC", "WiFi", "Breakfast", "Fort View", "Mini Bar", "Living Area"],
    capacity: "2 Guests",
    image: royalSuiteImg,
  },
  {
    id: "family",
    title: "Family Room",
    description: "Spacious room with two beds, perfect for families. Colorful traditional quilts and a warm, inviting atmosphere.",
    price: 3000,
    perNight: true,
    features: ["AC", "WiFi", "Breakfast", "2 Beds", "Kids Area"],
    capacity: "4 Guests",
    image: familyRoomImg,
  },
];

const HotelRooms = () => {
  const navigate = useNavigate();
  const [bookingRoom, setBookingRoom] = useState<typeof rooms[0] | null>(null);
  const [guests, setGuests] = useState(1);
  const [formData, setFormData] = useState({ name: "", phone: "+91 ", date: "" });
  const [submitting, setSubmitting] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const today = new Date().toISOString().split("T")[0];
  const totalAmount = bookingRoom ? bookingRoom.price * guests : 0;

  const handleBook = async () => {
    if (!bookingRoom || !formData.name || !formData.phone || !formData.date) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const message =
        `🏨 <b>New Room Booking</b>\n\n` +
        `<b>Room:</b> ${bookingRoom.title}\n` +
        `<b>Name:</b> ${formData.name}\n` +
        `<b>Phone:</b> ${formData.phone}\n` +
        `<b>Check-in:</b> ${formData.date}\n` +
        `<b>Nights:</b> ${guests}\n` +
        `<b>Price per night:</b> ₹${bookingRoom.price.toLocaleString("en-IN")}\n` +
        `<b>Total Amount:</b> ₹${totalAmount.toLocaleString("en-IN")}\n\n` +
        `Please confirm and process payment.`;

      await sendTelegramMessage(message);
    } catch { /* continue to payment */ }

    setPaymentAmount(totalAmount);
    setBookingRoom(null);
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
          <button onClick={() => navigate("/")} className="text-gold hover:text-gold-light transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <TreePine className="h-5 w-5 text-gold" />
            <span className="font-display text-lg font-bold text-gold">Heritage Rooms</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <img src={royalSuiteImg} alt="Heritage Rooms" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-light/80 mb-2">Stay in the Golden Fort</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">Heritage Rooms</h1>
          <p className="font-body text-white/70 max-w-lg">Experience royal Rajasthani hospitality in our beautifully appointed rooms with fort and desert views.</p>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="group rounded-3xl overflow-hidden border border-border bg-card shadow-md hover:shadow-xl transition-shadow">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="font-display text-xl font-bold text-white">{room.title}</h3>
                  <p className="font-body text-white/70 text-xs mt-0.5">{room.capacity}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="font-body text-sm text-muted-foreground mb-3">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feat) => {
                    const Icon = featureIcons[feat] || Bed;
                    return (
                      <span key={feat} className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-body rounded-full">
                        <Icon className="h-3 w-3" /> {feat}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-display text-xl font-bold text-foreground">₹{room.price.toLocaleString("en-IN")}</span>
                    <span className="font-body text-xs text-muted-foreground">/night</span>
                  </div>
                  <Button onClick={() => { setBookingRoom(room); resetForm(); }} size="sm" className="rounded-xl font-body text-xs">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={!!bookingRoom} onOpenChange={(v) => !v && setBookingRoom(null)}>
        <DialogContent className="sm:max-w-[360px] border-none bg-transparent p-0 shadow-none [&>button]:hidden">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-card border border-border">
            <div className="relative px-5 pt-5 pb-3 text-center bg-primary/5 border-b border-border">
              <button onClick={() => setBookingRoom(null)} className="absolute top-2 right-2 h-7 w-7 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors text-muted-foreground hover:text-foreground text-sm">✕</button>
              <h3 className="font-display text-lg font-bold text-foreground">{bookingRoom?.title}</h3>
              <p className="font-body text-xs text-muted-foreground mt-0.5">₹{bookingRoom?.price.toLocaleString("en-IN")}/night</p>
            </div>
            <div className="px-5 pb-4 pt-3 space-y-2.5">
              <div>
                <label className="font-body text-[11px] font-medium text-muted-foreground/80 flex items-center gap-1 mb-1"><User className="h-3 w-3 text-primary/60" /> Full Name</label>
                <Input placeholder="Your name" className="h-9 text-sm rounded-lg border-border" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="font-body text-[11px] font-medium text-muted-foreground/80 flex items-center gap-1 mb-1"><Phone className="h-3 w-3 text-primary/60" /> Phone Number</label>
                <Input placeholder="+91 XXXXX XXXXX" className="h-9 text-sm rounded-lg border-border" value={formData.phone}
                  onChange={(e) => {
                    let val = e.target.value;
                    if (!val.startsWith("+91")) val = "+91 " + val.replace(/^\+91\s*/, "");
                    setFormData({ ...formData, phone: val });
                  }}
                />
              </div>
              <div>
                <label className="font-body text-[11px] font-medium text-muted-foreground/80 flex items-center gap-1 mb-1"><CalendarDays className="h-3 w-3 text-primary/60" /> Check-in Date</label>
                <Input type="date" min={today} className="h-9 text-sm rounded-lg border-border" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
              <div>
                <p className="font-body text-[11px] font-medium text-muted-foreground/80 mb-1.5">Number of Nights</p>
                <div className="flex items-center justify-between bg-background/60 rounded-lg border border-border px-3 py-1.5">
                  <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20"><Minus className="h-3.5 w-3.5" /></button>
                  <span className="font-display text-base font-bold text-foreground">{guests} {guests === 1 ? "Night" : "Nights"}</span>
                  <button type="button" onClick={() => setGuests(Math.min(30, guests + 1))} className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20"><Plus className="h-3.5 w-3.5" /></button>
                </div>
              </div>
              <div className="bg-primary/5 rounded-lg p-2.5 text-center border border-primary/10">
                <p className="font-body text-[10px] text-muted-foreground">Total Amount</p>
                <p className="font-display text-xl font-bold text-primary">₹{totalAmount.toLocaleString("en-IN")}</p>
                <p className="font-body text-[9px] text-muted-foreground/60">₹{bookingRoom?.price.toLocaleString("en-IN")}/night × {guests} night{guests > 1 ? "s" : ""}</p>
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

      <PaymentDialog open={paymentOpen} onOpenChange={(v) => { setPaymentOpen(v); if (!v) resetForm(); }} amount={paymentAmount} bookingType="Room Booking" />
    </div>
  );
};

export default HotelRooms;
