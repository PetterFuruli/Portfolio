<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate the data (you can add more validation here)
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Specify the file path where you want to save the messages
        $file = 'messages.txt';

        // Format the message to be written into the file
        $message_content = "Name: $name\n";
        $message_content .= "Email: $email\n";
        $message_content .= "Message: $message\n";
        $message_content .= "-----------------------------\n";

        // Write the message to the file
        if (file_put_contents($file, $message_content, FILE_APPEND | LOCK_EX)) {
            echo "Thank you for your message!";
        } else {
            echo "Sorry, there was an error processing your message.";
        }
    } else {
        echo "Please fill in all fields.";
    }
}
?>
