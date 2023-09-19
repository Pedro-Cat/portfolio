'use client'

export function copyClick() {
    navigator.clipboard.writeText('pcatundarocha@gmail.com');

    var tag = document.getElementsByClassName("c-email__tag")[0];
    tag.innerHTML = "Copied!";
}

export function copyOut() {
    var tag = document.getElementsByClassName("c-email__tag")[0];
    tag.innerHTML = "Click to Copy!";
}