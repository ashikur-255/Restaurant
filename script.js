

function updateDateTime() {

    const dateTimeElement =
        document.getElementById("currentDateTime");

    if (!dateTimeElement) {
        return;
    }

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const date =
        now.toLocaleDateString("en-BD", options);

    const time =
        now.toLocaleTimeString("en-BD");

    dateTimeElement.textContent =
        date + " | " + time;
}


updateDateTime();

setInterval(updateDateTime, 1000);




const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        if (username.trim() === "" ||
            password.trim() === "") {

            alert(
                "Please enter username and password."
            );

            return;
        }


        const confirmation =
            confirm(
                "Login form submitted successfully.\n\n" +
                "Username: " + username +
                "\n\nDo you want to continue?"
            );


        if (confirmation) {

            alert(
                "Login successful!\n\n" +
                "Welcome to FoodHouse."
            );

        } else {

            alert(
                "Login cancelled."
            );

        }

    });

}




const reservationForm =
    document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "reservationName"
                ).value;

            const email =
                document.getElementById(
                    "reservationEmail"
                ).value;

            const guests =
                document.getElementById(
                    "guests"
                ).value;

            const date =
                document.getElementById(
                    "reservationDate"
                ).value;

            const time =
                document.getElementById(
                    "reservationTime"
                ).value;


            const confirmation =
                confirm(
                    "Reservation Details\n\n" +
                    "Name: " + name +
                    "\nEmail: " + email +
                    "\nGuests: " + guests +
                    "\nDate: " + date +
                    "\nTime: " + time +
                    "\n\nConfirm your reservation?"
                );


            if (confirmation) {

                alert(
                    "Reservation confirmed successfully!\n\n" +
                    "Thank you, " + name + "."
                );

                reservationForm.reset();

            }

        }
    );

}




const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const password =
                document.getElementById(
                    "signupPassword"
                ).value;

            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            if (password !== confirmPassword) {

                alert(
                    "Password and Confirm Password do not match."
                );

                return;
            }


            alert(
                "Account created successfully!\n\n" +
                "Welcome to FoodHouse."
            );


            signupForm.reset();

        }
    );

}



const newsletterForm =
    document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Thank you for subscribing to our newsletter!"
            );

            newsletterForm.reset();

        }
    );

}




const plusButton =
    document.getElementById("plusBtn");

const minusButton =
    document.getElementById("minusBtn");

const quantityInput =
    document.getElementById("quantity");


if (plusButton &&
    minusButton &&
    quantityInput) {


    plusButton.addEventListener(
        "click",
        function () {

            let quantity =
                parseInt(quantityInput.value);

            quantity++;

            quantityInput.value =
                quantity;

        }
    );


    minusButton.addEventListener(
        "click",
        function () {

            let quantity =
                parseInt(quantityInput.value);

            if (quantity > 1) {

                quantity--;

            }

            quantityInput.value =
                quantity;

        }
    );

}




const orderButton =
    document.getElementById("orderButton");

if (orderButton) {

    orderButton.addEventListener(
        "click",
        function () {

            const quantity =
                document.getElementById(
                    "quantity"
                ).value;

            alert(
                "Order added successfully!\n\n" +
                "Quantity: " + quantity
            );

        }
    );

}




$(document).ready(function () {

    $("#zoomImage").on(
        "mousemove",
        function (event) {

            const image =
                $(this);

            const container =
                image.parent();

            const offset =
                container.offset();

            const x =
                event.pageX - offset.left;

            const y =
                event.pageY - offset.top;

            const width =
                container.width();

            const height =
                container.height();

            const xPercent =
                (x / width) * 100;

            const yPercent =
                (y / height) * 100;


            image.css({

                "transform":
                    "scale(2)",

                "transform-origin":
                    xPercent + "% " +
                    yPercent + "%"

            });

        }
    );


    $("#zoomImage").on(
        "mouseleave",
        function () {

            $(this).css({

                "transform":
                    "scale(1)",

                "transform-origin":
                    "center center"

            });

        }
    );

});