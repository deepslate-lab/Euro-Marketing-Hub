import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useBranches() {
  return useQuery({
    queryKey: [api.branches.list.path],
    queryFn: async () => {
      const res = await fetch(api.branches.list.path);
      if (!res.ok) throw new Error("Failed to fetch branches");
      return api.branches.list.responses[200].parse(await res.json());
    },
  });
}
