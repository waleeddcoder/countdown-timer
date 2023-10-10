const endDate = "01-Oct-2023 09:30:59";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const dateDiff = end - now;
    if (dateDiff < 0) {
        const headings = document.querySelectorAll("h2");
        headings.forEach((heading) => {
            heading.remove();
        });

        const col = document.querySelector(".col");
        col.remove();

        const afterHead = document.createElement("h3");
        afterHead.textContent = "time is over ";

        const endNote = document.createElement("p");
        endNote.textContent = "Time's up buddy! Tell me about your progress.";

        const overlay = document.querySelector(".overlay");
        overlay.appendChild(afterHead);
        overlay.appendChild(endNote);
    }

    const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
};
clock();
setInterval(() => {
    clock();
}, 1000);
