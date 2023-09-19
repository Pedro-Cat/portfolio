'use client'

export function myFunction() {
    navigator.clipboard.writeText('pcatundarocha@gmail.com');

    var tooltip = document.getElementsByClassName("c-email__tag")[0];
    tooltip.innerHTML = "Copied!";
}

export function outFunc() {
    var tooltip = document.getElementsByClassName("c-email__tag")[0];
    tooltip.innerHTML = "Click to Copy!";
}