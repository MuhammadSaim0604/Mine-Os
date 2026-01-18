import { useMutation } from "@tanstack/react-query";
import { api, type InsertSubscriber } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateSubscriber() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 409) {
          throw new Error("You are already subscribed!");
        }
        if (res.status === 400) {
          throw new Error("Invalid email address.");
        }
        throw new Error("Failed to subscribe. Please try again.");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the future! 🚀",
        description: "You've been added to the early access list.",
        variant: "default",
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
