import { useMutation, useQuery } from "@tanstack/react-query";
import type { Inquiry } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllInquiries() {
  const { actor, isFetching } = useActor();
  return useQuery<Inquiry[]>({
    queryKey: ["inquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitInquiry(
        data.name,
        data.phone,
        data.email,
        data.message,
      );
    },
  });
}
