import { supabase } from "@/integrations/supabase/client";

export const sendTelegramMessage = async (message: string) => {
  const { data, error } = await supabase.functions.invoke("send-telegram", {
    body: { message },
  });
  if (error) throw error;
  return data;
};
