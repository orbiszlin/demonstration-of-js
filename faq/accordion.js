document.addEventListener('DOMContentLoaded', () => {
    // Get all accordions by .accordion class and store it in accordions constant
    const accordions = document.getElementsByClassName('accordion')

    // Passes each element used .accordion using array indexes
    for (let i = 0; i < accordions.length; i++) {
        // Get each accordion by index
        let accordion = accordions[i];
        // Get all items by .item class inside .accordion and store it in items variable
        let items = accordion.getElementsByClassName('item');

        // Passes each element inside the accordions using array indices
        for (let j = 0; j < items.length; j++) {
            // Get each item by index
            let item = items[j];

            // Adding click event for every item (because in for loop)
            item.addEventListener('click', () => {
                // Toggling active class after click
                item.classList.toggle('active')
            })
        }
    }
})