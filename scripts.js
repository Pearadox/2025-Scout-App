// Auto Path Creation Functionality
function createNewAutoPath() {
    const container = document.getElementById('autoPathsContainer');
    const pathDiv = document.createElement('div');
    pathDiv.className = 'auto-path-entry';
    pathDiv.style.marginBottom = '20px';
    pathDiv.style.padding = '15px';
    pathDiv.style.border = '2px solid #e0e0e0';
    pathDiv.style.borderRadius = '8px';
    pathDiv.style.backgroundColor = '#ffffff';
    pathDiv.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    pathDiv.style.transition = 'all 0.3s ease';

    // Starting position select
    const startLabel = document.createElement('label');
    startLabel.textContent = 'Starting Position: ';
    startLabel.style.fontWeight = 'bold';
    startLabel.style.display = 'block';
    startLabel.style.marginBottom = '5px';
    startLabel.style.color = '#333';
    const startSelect = document.createElement('select');
    startSelect.name = 'autoPathStartingPosition[]';
    startSelect.style.marginRight = '15px';
    startSelect.style.padding = '8px 12px';
    startSelect.style.border = '1px solid #ccc';
    startSelect.style.borderRadius = '4px';
    startSelect.style.fontSize = '14px';
    ['1', '2', '3'].forEach(pos => {
        const opt = document.createElement('option');
        opt.value = pos;
        opt.textContent = pos;
        startSelect.appendChild(opt);
    });

    // Description input
    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description: ';
    descLabel.style.fontWeight = 'bold';
    descLabel.style.display = 'block';
    descLabel.style.marginBottom = '5px';
    descLabel.style.marginTop = '10px';
    descLabel.style.color = '#333';
    const descInput = document.createElement('textarea');
    descInput.name = 'autoPathDescription[]';
    descInput.placeholder = 'Describe what this auto path does';
    descInput.style.width = '100%';
    descInput.style.height = '80px';
    descInput.style.marginRight = '10px';
    descInput.style.marginBottom = '10px';
    descInput.style.resize = 'vertical';
    descInput.style.padding = '8px 12px';
    descInput.style.border = '1px solid #ccc';
    descInput.style.borderRadius = '4px';
    descInput.style.fontSize = '14px';
    descInput.style.fontFamily = 'inherit';

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove Path';
    removeBtn.style.backgroundColor = '#dc3545';
    removeBtn.style.color = 'white';
    removeBtn.style.padding = '8px 16px';
    removeBtn.style.border = 'none';
    removeBtn.style.borderRadius = '4px';
    removeBtn.style.cursor = 'pointer';
    removeBtn.style.fontSize = '14px';
    removeBtn.style.fontWeight = '500';
    removeBtn.style.transition = 'background-color 0.3s ease';
    removeBtn.onmouseover = () => removeBtn.style.backgroundColor = '#c82333';
    removeBtn.onmouseout = () => removeBtn.style.backgroundColor = '#dc3545';
    removeBtn.onclick = () => {
        pathDiv.style.opacity = '0';
        pathDiv.style.transform = 'translateX(-20px)';
        setTimeout(() => container.removeChild(pathDiv), 300);
    };

    // Assemble
    pathDiv.appendChild(startLabel);
    pathDiv.appendChild(startSelect);
    pathDiv.appendChild(descLabel);
    pathDiv.appendChild(descInput);
    pathDiv.appendChild(removeBtn);

    container.appendChild(pathDiv);
}

// Form submission handling for pit scouting
function handlePitScoutingSubmit(event) {
    event.preventDefault();
    
    // Collect auto path data
    const autoPaths = [];
    const startingPositions = document.getElementsByName('autoPathStartingPosition[]');
    const descriptions = document.getElementsByName('autoPathDescription[]');
    
    for (let i = 0; i < startingPositions.length; i++) {
        if (startingPositions[i].value && descriptions[i].value) {
            autoPaths.push({
                startingPosition: startingPositions[i].value,
                description: descriptions[i].value
            });
        }
    }
    
    // Add auto paths to form data
    const formData = new FormData(event.target);
    formData.append('autoPaths', JSON.stringify(autoPaths));
    
    // Submit form data (you can modify this to send to your backend)
    console.log('Pit Scouting Data:', Object.fromEntries(formData));
    alert('Pit scouting data submitted successfully!');
}

// Initialize form handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize pit scouting form handlers
    const pitForm = document.getElementById('pitScoutingForm');
    if (pitForm) {
        pitForm.addEventListener('submit', handlePitScoutingSubmit);
    }
}); 