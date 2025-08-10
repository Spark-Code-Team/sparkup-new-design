// app/(admin)/reservations/page.jsx

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import axios from "axios";
import ReservationsClientPage from "../../components/ReservationClientPage";

async function getReservationForms(page = 1) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    console.log("No token, redirecting to login.");
    redirect("/login");
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}reservation-form?page=${page}&size=10`;

  try {
    const response = await axios.get(apiUrl, {
      headers: { Cookie: `access_token=${token}` },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      console.error(`API Error: Status ${status}`, error.response.data);

      if (status === 401 || status === 403) {
        console.log(`Status is ${status}. Redirecting to login page.`);
        redirect("/login");
      }

      throw new Error(`API returned with status ${status}`);
    }

    throw new Error("Network error or API is unreachable.");
  }
}

export default async function ReservationsPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;

  try {
    const data = await getReservationForms(page);
    return (
      <ReservationsClientPage
        initialData={data.items}
        page={data.page}
        totalPages={data.pages}
      />
    );
  } catch (error) {
    console.error("Failed to render ReservationsPage:", error.message);

    throw error;
  }
}
