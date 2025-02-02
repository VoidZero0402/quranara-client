import Axios from "@/libs/axios";

const Quranara = new Axios({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
    headers: {
        "Content-Type": "application/json",
        "x-quranara-secret": process.env.NEXT_PUBLIC_QURANARA_SECRET as string,
        origin: process.env.NEXT_PUBLIC_FRONTEND_URL as string,
    },
    requestOptions: {
        credentials: "include",
    },
});

export default Quranara;

// image load