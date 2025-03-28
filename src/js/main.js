const testimonials = [
    "Initially doubtful, the outcome surpassed all my anticipations. The powerful analytics and reporting features offered crucial perspectives on our business metrics, <span class='text-white opacity-40'>enabling us to implement informed</span>",
    "The platform transformed the way we handle projects. The collaborative tools made teamwork more seamless, <span class='text-white opacity-40'>increasing our efficiency dramatically.</span>",
    "A top-tier solution that has changed our workflow. The AI-driven insights and automation capabilities have <span class='text-white opacity-40'>enhanced our decision-making processes significantly.</span>"
];

function showTestimonial(index) {

    document.getElementById("testimonial-text").innerHTML = testimonials[index];
    document.querySelectorAll(".profile-btn").forEach(btn => {
        btn.classList.remove("bg-white/5");
    });

    document.querySelectorAll(".profile-btn")[index].classList.add("bg-white/5");
}