import ky from "ky"
import { useAuthStore } from "@/store/authStore"
import type { ApiSuccess } from "@/types/api"

const api = ky.create({
  prefix: import.meta.env.VITE_API_URL,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const token = useAuthStore.getState().token
        if (token) request.headers.set("Authorization", `Bearer ${token}`)
      },
    ],
  },
})

export async function apiGet<T>(url: string): Promise<T> {
  const res = await api.get(url).json<ApiSuccess<T>>()
  return res.data
}

export async function apiPost<T>(url: string, body: unknown): Promise<T> {
  const res = await api.post(url, { json: body }).json<ApiSuccess<T>>()
  return res.data
}
