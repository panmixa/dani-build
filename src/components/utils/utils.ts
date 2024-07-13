import {toast} from "sonner";

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if(element)
        element.scrollIntoView({ behavior: 'smooth' });
};

export const copyEmailToClipboard = (mail: string) => {
    copyEmailToClipboardWithoutAlert(mail);
    toast.success("Email address copied: " + mail);
};

export const copyEmailToClipboardWithoutAlert = (mail: string) => {
    const email = mail;
    const tempInput = document.createElement('textarea');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
};