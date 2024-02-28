<DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Person Information</title>
        </head>
        
        <body>
            <h1>Enter Details for THree People</h1>
            <div>
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name">
            </div>
            <div>
                < label for="last-name">Last Name:</label>
                <input type="text" id="last-name">
            </div>
            <div>
                < label for="address">Address:</label>
                <input type="text" id="address">
            </div>
            <button onclick="collectInfo()">Submit</button>

            <script>
                function collectInfo() {
                    const firstName=
                    document.getElementById("first-name").value;
                    const lastName=
                    document.getElementById("last-name").value;
                    const address=
                    document.getElementById("address").value;

                    //Create an object to store person details
                    const person={
                        firstNAme,
                        lastName,
                        address
                    };
                    //Display the collected information
                    console.log("Collected Information");
                    console.log('First Name: ${person.firstName}');
                    console.log('Last Name: ${person.lastName}');
                    console.log('Address: ${person.address}');
                }
            </script>
        </body>
    </html>