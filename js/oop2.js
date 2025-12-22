class Notification{
    send(){
        console.log("Sending notification...");
    }
}
let notification = new Notification().send();
class EmailNotification extends Notification{
    send(){
        console.log("Sending email notification...");
    }
}
let emailNotification = new EmailNotification().send();
class SmsNotification extends Notification{
    send(){
        console.log("Sending sms notification...");
    }
}
let smsNotification = new SmsNotification().send();

const notifications = [
    new Notification(),
    new EmailNotification(),
    new SmsNotification()];
    notifications.forEach(notification => notification.send());


    localStorage.setItem("theme", "dark");
    const theme = localStorage.getItem("theme");
    console.log(theme);
    localStorage.removeItem("theme");
    localStorage.clear();
    sessionStorage.setItem("step", "2");
    const step = sessionStorage.getItem("step");
    console.log(step);
    sessionStorage.removeItem("step");
    sessionStorage.clear();
    