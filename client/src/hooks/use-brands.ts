import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useBrands() {
  return useQuery({
    queryKey: [api.brands.list.path],
    queryFn: async () => {
      const res = await fetch(api.brands.list.path);
      if (!res.ok) throw new Error("Failed to fetch brands");
      return api.brands.list.responses[200].parse(await res.json());
    },
  });
}
