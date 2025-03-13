const reportText = document.getElementById("enterReport");

if (reportText) {
    reportText.addEventListener("keydown", (event) => {
        if(event.key == "Enter") {
            document.location.assign("/html/index.html");
            alert("The Thought Police have been consulted and " + reportText.value+ " will be investigated for Thoughtcrime. Thank you comerade, you are the best of us. May the Traitors fall! Long live Big Brother.");
        }
    });
} else {
    console.log("Could not locate textbox");
}