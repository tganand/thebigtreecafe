import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
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
      QRCode.toDataURL(getUpiLink(amount), { width: 220, margin: 2, color: { dark: "#1a1a1a", light: "#ffffff" } })
        .then(setQrUrl)
        .catch(console.error);
    }
  }, [open, amount]);

  const paymentOptions = [
    { id: "gpay", name: "Google Pay", logo: gpayLogo, getLink: getGPayLink },
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
      <DialogContent className="sm:max-w-[370px] max-h-[90vh] border-none bg-transparent p-0 shadow-none [&>button]:hidden">
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-card border border-border max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="relative px-5 pt-6 pb-3 text-center bg-primary/5 border-b border-border">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mb-2">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Complete Payment</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">{bookingType}</p>
            <p className="font-display text-3xl font-bold text-primary mt-3">₹{amount.toLocaleString("en-IN")}</p>
          </div>

          {/* Close button */}
          <button onClick={() => onOpenChange(false)} className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors text-muted-foreground hover:text-foreground">✕</button>
          <div className="px-5 py-4 space-y-4">
            {/* QR Code */}
            <div className="text-center">
              <p className="font-body text-xs text-muted-foreground mb-3">Scan QR code to pay via any UPI app</p>
              {qrUrl && (
                <div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-border">
                  <img src={qrUrl} alt="UPI Payment QR Code" className="w-[180px] h-[180px]" />
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="font-body text-xs text-muted-foreground">or pay with</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Payment options with real logos */}
            <div className="flex gap-3 justify-center">
              {paymentOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`flex-1 py-3 px-2 rounded-xl border-2 transition-all text-center font-body text-xs font-semibold ${
                    selected === opt.id
                      ? "border-primary shadow-md scale-[1.02]"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-1.5 overflow-hidden">
                    <img src={opt.logo} alt={opt.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-foreground">{opt.name}</span>
                </button>
              ))}
            </div>

            {/* Important Note */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-center">
              <p className="font-body text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed">
                📞 After payment, our team will call you to confirm your booking. Please show your payment proof at the counter upon arrival for confirmation.
              </p>
            </div>

            {/* Pay button */}
            <Button
              onClick={handlePay}
              disabled={!selected}
              className="w-full h-12 rounded-xl font-body tracking-wide text-sm"
            >
              Pay ₹{amount.toLocaleString("en-IN")}
            </Button>

            <p className="font-body text-[10px] text-center text-muted-foreground/60">
              You will be redirected to your payment app to complete the transaction
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
