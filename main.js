'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
    navToggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navToggleFunc);
}




function formatText(style) {

    var textInput = document.querySelector('.styled-input');
    var selectedText = textInput.value.substring(textInput.selectionStart, textInput.selectionEnd);
    var newText;

    switch (style) {
        case 'bold':
            selectedText = '<strong>' + selectedText + '</strong>';
            break;
        case 'italic':
            selectedText = '<em>' + selectedText + '</em>';
            break;
        case 'underline':
            selectedText = '<u>' + selectedText + '</u>';
            break;
        default:
            break;
    }

    var newText = textInput.value.substring(0, textInput.selectionStart) + selectedText + textInput.value.substring(textInput.selectionEnd);
    textInput.value = newText;
}

function changeFontSize() {
    var fontSize = document.getElementById('fontSize').value;
    document.querySelector('.styled-input').style.fontSize = fontSize;
}

function addList(type) {
    var textInput = document.querySelector('.styled-input');
    var selectedText = textInput.value.substring(textInput.selectionStart, textInput.selectionEnd);

    if (type === 'bullet') {
        selectedText = '<ul><li>' + selectedText.replace(/\n/g, '</li><li>') + '</li></ul>';
    } else if (type === 'numbered') {
        selectedText = '<ol><li>' + selectedText.replace(/\n/g, '</li><li>') + '</li></ol>';
    }

    var newText = textInput.value.substring(0, textInput.selectionStart) + selectedText + textInput.value.substring(textInput.selectionEnd);
    textInput.value = newText;
}

function addLink() {
    var textInput = document.querySelector('.styled-input');
    var selectedText = textInput.value.substring(textInput.selectionStart, textInput.selectionEnd);
    var url = prompt("Enter the URL:");

    if (url) {
        selectedText = '<a href="' + url + '">' + selectedText + '</a>';
    }

    var newText = textInput.value.substring(0, textInput.selectionStart) + selectedText + textInput.value.substring(textInput.selectionEnd);
    textInput.value = newText;
}

function savePrompt() {
    var textInput = document.querySelector('.styled-input');
    // Save the content of the text input for future use
    alert('Prompt saved successfully!');
}

// Sample data for demonstration
const usageData = {
    daily: [/* Daily data */],
    weekly: [/* Weekly data */],
    monthly: [/* Monthly data */]
};

// Sample data for demonstration
const promptData = [
    { id: 1, text: "Prompt 1", frequency: 50, customized: true, rating: 4, cost: 10 },
    { id: 2, text: "Prompt 2", frequency: 30, customized: false, rating: 3, cost: 5 },
    { id: 3, text: "Prompt 3", frequency: 20, customized: true, rating: 5, cost: 15 }
];

// Function to calculate usage summary and update UI
function calculateUsageSummary() {
    const totalPrompts = promptData.length;
    const customizedPrompts = promptData.filter(prompt => prompt.customized).length;
    const totalFeedback = promptData.reduce((acc, prompt) => acc + prompt.rating, 0);
    const averageRating = totalFeedback / promptData.length;
    const totalCost = promptData.reduce((acc, prompt) => acc + prompt.cost, 0);

    // Update UI with usage summary
    document.getElementById('total-prompts').textContent = totalPrompts;
    document.getElementById('customized-prompts').textContent = customizedPrompts;
    document.getElementById('total-feedback').textContent = totalFeedback;
    document.getElementById('average-rating').textContent = averageRating.toFixed(1);
    document.getElementById('total-cost').textContent = `$${totalCost}`;
}

// Initial calculation of usage summary when the page loads
window.onload = calculateUsageSummary;






// Function to dynamically add a new prompt
function addPrompt() {
    const highlightsList = document.getElementById('highlights-list');

    // Create a new highlight item
    const newPromptItem = document.createElement('div');
    newPromptItem.classList.add('highlight-item');

    // Create title and description elements
    const titleElement = document.createElement('h3');
    titleElement.classList.add('highlight-title');
    titleElement.textContent = 'New Prompt';
    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('highlight-description');
    descriptionElement.textContent = 'Description of the new prompt.';

    // Append title and description to the new prompt item
    newPromptItem.appendChild(titleElement);
    newPromptItem.appendChild(descriptionElement);

    // Append the new prompt item to the highlights list
    highlightsList.appendChild(newPromptItem);
}

// Add event listener to the "Add Prompt" button
document.getElementById('add-prompt-btn').addEventListener('click', addPrompt);

// Smooth scrolling to section when link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});






// Function to handle form submission
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const feedback = document.getElementById('feedback').value;
    const suggestion = document.getElementById('suggestion').value;
    const customization = document.getElementById('customization').value;

    // Perform further actions such as sending data to a server, storing in a database, etc.
    // For demonstration, we'll just log the data to the console and display a success message
    console.log('Feedback:', feedback);
    console.log('Suggestion:', suggestion);
    console.log('Customization:', customization);

    // Display success message
    alert('Feedback submitted successfully!');

    // Reset form fields
    document.getElementById('feedback-form').reset();
});



$(document).ready(function () {
    // Billing Cycle Customization Form Submission
    $('#billing-cycle-form').submit(function (event) {
        event.preventDefault(); // Prevent default form submission
        // Get form data
        var businessUnit = $('#business-unit').val();
        var billingCycle = $('#billing-cycle').val();
        // Perform further actions such as saving data
        console.log('Business Unit:', businessUnit);
        console.log('Billing Cycle:', billingCycle);
        // Reset form fields
        $(this)[0].reset();
    });

    // Report Generation Form Submission
    $('#report-generation-form').submit(function (event) {
        event.preventDefault(); // Prevent default form submission
        // Get form data
        var startDate = $('#start-date').val();
        var endDate = $('#end-date').val();
        // Perform further actions such as generating reports
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        // Reset form fields
        $(this)[0].reset();
    });
});



// Sample prompt data (replace with actual data)
const prompts = [
    { title: "Prompt 1", category: "Technology", complexity: "Beginner" },
    { title: "Prompt 2", category: "Science", complexity: "Intermediate" },
    // Add more prompts as needed
];

// Function to display prompts
function displayPrompts(prompts) {
    const promptDisplay = document.getElementById("prompt-display");
    promptDisplay.innerHTML = ""; // Clear existing prompts

    prompts.forEach(prompt => {
        const promptItem = document.createElement("div");
        promptItem.classList.add("prompt-item");
        promptItem.innerHTML = `
            <h3>${prompt.title}</h3>
            <p><strong>Category:</strong> ${prompt.category}</p>
            <p><strong>Complexity:</strong> ${prompt.complexity}</p>
            <!-- Add more prompt details as needed -->
        `;
        promptDisplay.appendChild(promptItem);
    });
}

// Function to search prompts
function searchPrompts() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const filteredPrompts = prompts.filter(prompt => prompt.title.toLowerCase().includes(searchQuery));
    displayPrompts(filteredPrompts);
}

// Function to filter prompts
function filterPrompts() {
    const category = document.getElementById("category").value;
    const complexity = document.getElementById("complexity").value;

    let filteredPrompts = prompts;
    if (category) {
        filteredPrompts = filteredPrompts.filter(prompt => prompt.category === category);
    }
    if (complexity) {
        filteredPrompts = filteredPrompts.filter(prompt => prompt.complexity === complexity);
    }

    displayPrompts(filteredPrompts);
}

// Initial display of prompts
displayPrompts(prompts);