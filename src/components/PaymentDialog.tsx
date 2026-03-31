import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import QRCode from "qrcode";
import { getUpiLink, getGPayLink, getPhonePeLink, getPaytmLink } from "@/lib/payment";
import gpayLogo from "@/assets/gpay-logo.png";
import phonepeLogo from "@/assets/phonepe-logo.png";
import paytmLogo from "@/assets/paytm-logo.png";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  bookingType: string;
}

const PaymentDialog = ({ open, onOpenChange, amount, bookingType }: PaymentDialogProps) => {
  const [qrUrl, setQrUrl] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (open && amount > 0) {
      QRCode.toDataURL(getUpiLink(amount), { width: 160, margin: 2, color: { dark: "#1a1a1a", light: "#ffffff" } })
        .then(setQrUrl)
        .catch(console.error);
    }
  }, [open, amount]);

  const paymentOptions = [
    { id: "gpay", name: "GPay", logo: gpayLogo, getLink: getGPayLink },
    { id: "phonepe", name: "PhonePe", logo: phonepeLogo, getLink: getPhonePeLink },
    { id: "paytm", name: "Paytm", logo: paytmLogo, getLink: getPaytmLink },
  ];

  const handlePay = () => {
    if (!selected) return;
    const option = paymentOptions.find((o) => o.id === selected);
    if (option) {
      window.open(option.getLink(amount), "_self");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[340px] border-none bg-transparent p-0 shadow-none [&>button]:hidden">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-card border border-border">
          {/* Header */}
          <div className="relative px-4 pt-4 pb-2.5 text-center bg-primary/5 border-b border-border">
            <button onClick={() => onOpenChange(false)} className="absolute top-2 right-2 h-7 w-7 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors text-muted-foreground hover:text-foreground text-sm">✕</button>
            <h3 className="font-display text-base font-bold text-foreground">Complete Payment</h3>
            <p className="font-body text-xs text-muted-foreground">{bookingType}</p>
            <p className="font-display text-2xl font-bold text-primary mt-1">₹{amount.toLocaleString("en-IN")}</p>
          </div>

          <div className="px-4 py-3 space-y-3">
            {/* QR Code */}
            <div className="text-center">
              <p className="font-body text-[10px] text-muted-foreground mb-2">Scan QR code to pay via any UPI app</p>
              {qrUrl && (
                <div className="inline-block p-2 bg-white rounded-xl shadow-sm border border-border">
                  <img src={qrUrl} alt="UPI Payment QR Code" className="w-[130px] h-[130px]" />
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-border" />
              <span className="font-body text-[10px] text-muted-foreground">or pay with</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Payment options */}
            <div className="flex gap-2 justify-center">
              {paymentOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`flex-1 py-2 px-1.5 rounded-lg border-2 transition-all text-center font-body text-[10px] font-semibold ${
                    selected === opt.id
                      ? "border-primary shadow-md scale-[1.02]"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <div className="w-8 h-8 rounded flex items-center justify-center mx-auto mb-1 overflow-hidden">
                    <img src={opt.logo} alt={opt.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-foreground">{opt.name}</span>
                </button>
              ))}
            </div>

            {/* Important Note */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-2 text-center">
              <p className="font-body text-[10px] text-amber-700 dark:text-amber-400 leading-relaxed">
                📞 After payment, our team will call you to confirm your booking. Show payment proof at counter upon arrival.
              </p>
            </div>

            {/* Pay button */}
            <Button
              onClick={handlePay}
              disabled={!selected}
              className="w-full h-10 rounded-lg font-body tracking-wide text-sm"
            >
              Pay ₹{amount.toLocaleString("en-IN")}
            </Button>

            <p className="font-body text-[9px] text-center text-muted-foreground/60">
              You will be redirected to your payment app
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
