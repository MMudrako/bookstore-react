
import { useForm } from "react-hook-form";
import bookShelf from "../assets/bookShelf.jpg"
type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate sending data to server
        console.log(data);
        // Reset form after successful submission
        reset();
    };


    return (
        <>
            <div className="custom-container mx-auto px-4 grid grid-cols-1 sm:grid-cols-[1fr_1fr] sm:gap-6 gap-y-8 py-6 bg-parchment">
                <div className="col-start-1 row-start-1 w-full max-w-[450px] border border-gray-300 shadow-md rounded-lg overflow-hidden">
                    <img
                        src={bookShelf}
                        alt="floating book"
                        className="w-full h-48 sm:h-64 object-cover"
                    />
                    <div className="flex flex-col justify-end bg-parchment px-4 py-4">
                        <h2 className="text-2xl text-wornred font-semibold mb-2">Call To Action Message</h2>
                        <p className="text-black text-sm">
                            Welcome to my project! Proin congue ligula id risus posuere, vel eleifend ex egestas.
                            Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas.
                        </p>
                    </div>
                </div>



                <div className="col-start-1 row-start-2 sm:col-start-2 sm:row-start-1 flex flex-col px-2 justify-center">
                    <h1 className="text-4xl font-semibold text-olive m-10">Leave me a message</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                className="w-full border p-2 rounded bg-parchment"
                            />
                            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Enter a valid email",
                                    },
                                })}
                                className="w-full border p-2 rounded bg-parchment"
                            />
                            {errors.email && (
                                <p className="text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="block text-sm font-medium">Message</label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                className="w-full border p-2 rounded h-32 bg-parchment"
                            />
                            {errors.message && (
                                <p className="text-red-600">{errors.message.message}</p>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-olive text-white px-4 py-2  rounded hover:bg-dust"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                        </div>

                    </form>


                </div>

            </div>

        </>

    );
}
