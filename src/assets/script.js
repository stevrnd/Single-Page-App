//Reference Section Element
const Section = document.getElementById("section");

//Update Section on Load
UpdateSection();

//Update Section Contents when hash is changed.
window.addEventListener("hashchange", () =>{
    UpdateSection();
})

function UpdateSection(){
    const sectionName = location.hash.substring(1);
    console.log(sectionName);
    UpdateSectionContent(sectionName);
}

//Updates the innerHTML of the section element.
function UpdateSectionContent(sectionName){
    Section.innerHTML = GetSectionContent(sectionName);
}

//Get Section Content based on the SectionName
function GetSectionContent(sectionName){

    if(sectionName == "section1")
        return Section1Content();
    else if(sectionName == "section2")
        return Section2Content();
    else if(sectionName == "section3")
        return Section3Content();
    else if(sectionName == "section4")
        return Section4Content();
    else if(sectionName == "section5")
        return Section5Content();
    else if(sectionName == "section6")
        return Section6Content();
    else if(sectionName == "section7")
        return Section7Content();
    else
        return SectionNotFoundContent();
}

//Section Template Functions - Returning html for that section.
function Section1Content(){
    loadPreviewImage();
    openDatabase();
    return `
    <div class="section-nav-right">
        <a href="#section2" class="nav-link green-btn">Employer Profile</a>
        <a href="#section3" class="nav-link green-btn">Applicant Profile</a>
    </div>
    <table id="dataTable" style="width: 100%;" class="fixed-width-table">
        <thead>
        <tr>
            <th>Role Category</th>
            <th>Role</th>
            <th>Location</th>
            <th>Industry</th>
            <th>Function</th>
            <th>Job Title</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Details/Apply</th>
        </tr>
        </thead>
        <tbody>
        <!-- Table body will be populated dynamically -->
        
        </tbody>
    </table>
    `;
}

function Section2Content(){
    // Call loadPreviewImage() after a delay of 100 milliseconds
    setTimeout(loadPreviewImage, 100);
    return `
    <div class="section-nav-file-load">
        <span class="welcome-back-label">Welcome: Employer Name</span>
        <a href="#section5" class="nav-link green-btn">Back</a>
    </div>
    <!-- Previewing the image -->
    <img src="" alt="Preview Uploaded Image" id="file-preview" style="width: 150px; height: 150px;">
    <table id="dataTable">
        <tr>
            <td style="width: 200px; height: 40px;"><b>Company Name:</b></td>
            <td contenteditable="true" class="editable-cell"></td>          
        </tr>
        <tr>
            <td>Company Website:</td>
            <td contenteditable="true" class="editable-cell"></td>            
        </tr>
        <tr>
            <td>Company Logo:</td>
            <td contenteditable="true" class="editable-cell"></td>            
        </tr>
        <tr>
            <td>Employer Name:</td>
            <td contenteditable="true" class="editable-cell"></td>
        </tr>
        <tr>
            <td>Phone Number:</td>
            <td contenteditable="true" class="editable-cell"></td>
            
        </tr>
        <tr>
            <td>Email:</td>
            <td contenteditable="true" class="editable-cell"></td>
        </tr>
        <tr>
            <td>Profile Picture:</td>
            <td>
                <!-- Input for image -->
                <input type="file" accept="image/*" onchange="previewImage(event)"> 
            </td>
        </tr>
    </table>
    `;
}

function Section3Content(){
    // Call loadPreviewImage() after a delay of 100 milliseconds
    setTimeout(loadPreviewImage, 100);
    return `
    
    <div class="section-nav-file-load">
        <span class="welcome-back-label">Welcome: Applicant Name </span>
        <a href="#section1" class="nav-link green-btn">Back</a>
    </div>
    <img src="" alt="Preview Uploaded Image" id="file-preview" style="width: 150px; height: 150px;">
    <table id="dataTable">
        <tr>
            <td style="width: 200px; height: 40px;"><b>Applicant Name:</b></td>
            <td contenteditable="true" class="editable-cell"></td>
          
        </tr>
        
        <tr>
            <td>Phone Number:</td>
            <td contenteditable="true" class="editable-cell"></td>
            
        </tr>
        <tr>
            <td>Email:</td>
            <td contenteditable="true" class="editable-cell"></td>
            
        </tr>
        <tr>
            <td>Profile Picture:</td>
            <td>
                <!-- Input for image -->
                <input type="file" accept="image/*" onchange="previewImage(event)"> 
            </td>
        </tr>
        <tr>
            <td>CV:</td>
            <td>
                <!-- Input for CV -->
                <input type="file" accept=".pdf, .docx"> 
            </td>
        </tr>
    </table>
    `;
}

function Section4Content(){

    return `
    <div class="section-nav-job-view">
        <a href="#section1" class="nav-link green-btn">Apply</a>
        <a href="#section1" class="nav-link green-btn">Back</a>
    </div>
    <table id="dataTable">
        <tr>
            <td style="width: 200px; height: 40px;"><b>Company Name:</b></td>
            <td contenteditable="true" class="editable-cell" id="Company"></td>          
        </tr>
        <tr>
            <td>Role Category:</td>
            <td contenteditable="true" class="editable-cell" id="Role Category"></td>            
        </tr>
        <tr>
            <td>Role:</td>
            <td contenteditable="true" class="editable-cell" id="Role"></td>
            
        </tr>
        <tr>
            <td>Location:</td>
            <td contenteditable="true" class="editable-cell" id="Location"></td>
        </tr>
        <tr>
            <td>Industry:</td>
            <td contenteditable="true" class="editable-cell" id="Industry"></td>
            
        </tr>
        <tr>
            <td>Function:</td>
            <td contenteditable="true" class="editable-cell" id="Functional Area"></td>
        </tr>
        <tr>
            <td>Title:</td>
            <td contenteditable="true" class="editable-cell" id="Job Title"></td>
        </tr>
        <tr>
            <td>Experience:</td>
            <td contenteditable="true" class="editable-cell" id="Job Experience Required"></td>
        </tr>
        <tr>
            <td>Salary:</td>
            <td contenteditable="true" class="editable-cell" id="Job Salary"></td>
        </tr>
    </table>
    `;
}

function Section5Content(){
    openDatabase()
    // Call loadPreviewImage() after a delay of 100 milliseconds
    setTimeout(loadPreviewImage, 100);
    return `
    <div class="section-nav">
        <img src="assets/DN-Logo.png" alt="Digital Native Logo">
        <div class="welcome-message">Welcome: Employer Name</div>
        <div class="button-stack">
            <a href="#" class="nav-link green-btn">Login</a>
            <a href="#" class="nav-link green-btn">Profile</a>
            <a href="#section6" class="nav-link green-btn">Add New</a>
        </div>
        <img src="" alt="Preview Uploaded Image" id="file-preview" style="width: 150px; height: 150px;">
    </div>
    
    <table id="dataTable" style="width: 100%;" class="fixed-width-table">
        <thead>
        <tr>
            <th>Role Category</th>
            <th>Role</th>
            <th>Location</th>
            <th>Industry</th>
            <th>Function</th>
            <th>Job Title</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Details/Apply</th>
        </tr>
        </thead>
        <tbody>
        <!-- Table body will be populated dynamically -->
        
        </tbody>
    </table>
    `;
}

function Section6Content(){
    // Call loadPreviewImage() after a delay of 100 milliseconds
    setTimeout(loadPreviewImage, 100);
    return `
   
    <div class="section-nav-job-view">
        <span class="welcome-back-label">Welcome: Employer Name</span>
        <form id="updateForm">
            <button type="submit" class="nav-link green-btn" id="addButton">Save</button>
            <a href="#section5" class="nav-link green-btn">Back</a>
        </form>
        <img src="" alt="Preview Uploaded Image" id="file-preview" style="width: 150px; height: 150px;">
    </div>
    <table id="dataTable">
        <tr>
            <td style="width: 200px; height: 40px;"><b>Company Name:</b></td>
            <td contenteditable="true" class="editable-cell" id="companyName"></td>          
        </tr>
        <tr>
            <td>Role Category:</td>
            <td contenteditable="true" class="editable-cell" id="roleCategory"></td>            
        </tr>
        <tr>
            <td>Role:</td>
            <td contenteditable="true" class="editable-cell" id="role"></td>           
        </tr>
        <tr>
            <td>Location:</td>
            <td contenteditable="true" class="editable-cell" id="location"></td>
        </tr>
        <tr>
            <td>Industry:</td>
            <td contenteditable="true" class="editable-cell" id="industry"></td>
            
        </tr>
        <tr>
            <td>Function:</td>
            <td contenteditable="true" class="editable-cell" id="function"></td>
        </tr>
        <tr>
            <td>Title:</td>
            <td contenteditable="true" class="editable-cell" id="title"></td>
        </tr>
        <tr>
            <td>Experience:</td>
            <td contenteditable="true" class="editable-cell" id="experience"></td>
        </tr>
        <tr>
            <td>Salary:</td>
            <td contenteditable="true" class="editable-cell" id="salary"></td>
        </tr>
    </table>
    `;
}

function Section7Content(){
    // Call loadPreviewImage() after a delay of 100 milliseconds
    setTimeout(loadPreviewImage, 100);
    return `
    <div class="section-nav">
        <div class="button-stack">
        <span class="welcome-back-label">Welcome: Employer Name</span>
            <form id="updateForm">
                <button type="submit" class="nav-link green-btn" id="updateButton" data-uniqid="#">Update</button>
                <button type="submit" class="nav-link green-btn" id="deleteButton" data-uniqid="#">Delete</button>
                <a href="#section5" class="nav-link green-btn">Back</a>
            </form>
        </div>
        <img src="" alt="Preview Uploaded Image" id="file-preview" style="width: 150px; height: 150px;">
    </div>
    <table id="dataTable">
        <tr>
            <td style="width: 200px; height: 40px;"><b>Company Name:</b></td>
            <td contenteditable="true" class="editable-cell" id="Company"></td>          
        </tr>
        <tr>
            <td>Role Category:</td>
            <td contenteditable="true" class="editable-cell" id="Role Category"></td>            
        </tr>
        <tr>
            <td>Role:</td>
            <td contenteditable="true" class="editable-cell" id="Role"></td>           
        </tr>
        <tr>
            <td>Location:</td>
            <td contenteditable="true" class="editable-cell" id="Location"></td>
        </tr>
        <tr>
            <td>Industry:</td>
            <td contenteditable="true" class="editable-cell" id="Industry"></td>
        </tr>
        <tr>
            <td>Function:</td>
            <td contenteditable="true" class="editable-cell" id="Functional Area"></td>
        </tr>
        <tr>
            <td>Title:</td>
            <td contenteditable="true" class="editable-cell" id="Job Title"></td>
        </tr>
        <tr>
            <td>Experience:</td>
            <td contenteditable="true" class="editable-cell" id="Job Experience Required"></td>
        </tr>
        <tr>
            <td>Salary:</td>
            <td contenteditable="true" class="editable-cell" id="Job Salary"></td>
        </tr>
    </table>
    `;
}

function SectionNotFoundContent(){
    return `
    
    <div class="section-nav-file-load">
        <a href="#section1" class="nav-link green-btn">Back</a>
    </div> 
    <table class="file-input-table">
        <tr>
            <td class="submit-cell">
                <div class="file-input-wrapper">
                    <span class="file-loader-label">File Loader</span>
                    <input type="file" id="fileInput" class="file-input" />
                    <label for="fileInput" class="file-label">Submit</label>
                </div>
            </td>
        </tr>
    </table>
    `;
    
    
}

const fileInput= document.getElementById('fileInput')
if (fileInput) {
    fileInput.addEventListener('change', handleFileSelect, false);
}

document.querySelectorAll('.editable-cell').forEach(function(cell) {
    cell.addEventListener('blur', function() {
        // Apply onBlur effect
        this.style.backgroundColor = '';
        this.style.border = '1px solid #ccc';
    });
});

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const csvData = e.target.result;
        const jsonData = parseCSV(csvData);
        storeDataInIndexedDB(jsonData);
    };

    reader.readAsText(file);
}


function parseCSV(csv) {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = CSVtoArray(lines[i]);
        //currentLine[0] = undefined
        for (let j = 0; j < headers.length; j++) {
            if (headers[j] === "Uniq_Id" && currentLine[j] === undefined) {
                break
            }
            obj[headers[j]] = currentLine[j];
        }
        if (!isEmpty(obj)) {
            result.push(obj);
        }
    }
    return result;
}

function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
}

function CSVtoArray(text) {
    //const re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    const re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    //if (!re_valid.test(text)) return null;
    const a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
}


function storeDataInIndexedDB(jsonData) {
    const request = indexedDB.open("JobsDatabase", 1);

    request.onerror = function(event) {
        console.error('Error storing data in IndexedDB');
        console.error(event);
    };

    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        db.createObjectStore("jobs", { keyPath: 'Uniq_Id'});
    };

    request.onsuccess = function(event) {
        console.log('Data stored successfully in IndexedDB');
        const db = event.target.result;
        const transaction = db.transaction("jobs", 'readwrite');
        const store = transaction.objectStore("jobs");
        jsonData.forEach(function(item) {
            store.add(item);
        });
        db.close();
    };
}

function populateTable(objectStore, tableBody, sectionName) {
    // Retrieve the data from the IndexedDB object store
    const request = objectStore.openCursor();
    request.onsuccess = function(event) {
        const cursor = event.target.result;
        if (cursor) {
            // Populate your HTML table with the retrieved data
            const rowData = cursor.value;
            const row = document.createElement('tr');
            if (sectionName == "section1") {
                row.innerHTML = `<td>${rowData["Role Category"]}</td><td>${rowData["Role"]}</td><td>${rowData["Location"]}</td><td>${rowData["Industry"]}</td><td>${rowData["Functional Area"]}</td><td>${rowData["Job Title"]}</td><td>${rowData["Job Experience Required"]}</td><td>${rowData["Job Salary"]}</td><td><a href="#section4" class="nav-link green-btn" data-uniqid="${rowData["Uniq_Id"]}">Details</a></td>`;
            } else if (sectionName == "section5") {
                row.innerHTML = `<td>${rowData["Role Category"]}</td><td>${rowData["Role"]}</td><td>${rowData["Location"]}</td><td>${rowData["Industry"]}</td><td>${rowData["Functional Area"]}</td><td>${rowData["Job Title"]}</td><td>${rowData["Job Experience Required"]}</td><td>${rowData["Job Salary"]}</td><td><a href="#section7" class="nav-link green-btn" data-uniqid="${rowData["Uniq_Id"]}">Manage</a></td>`;
            }

            // Add more cells if needed
            tableBody.appendChild(row);

            cursor.continue();
        } else {
            console.log('No more data found in IndexedDB');
        }
    };
}

function openDatabase() {
    const request = indexedDB.open("JobsDatabase", 1);

    request.onerror = function(event) {
        console.error("Error opening database:", event.target.error);
    };

    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        db.createObjectStore("jobs", { keyPath: 'Value', autoIncrement: true });
    };
    request.onsuccess = function(event) {
        const db = event.target.result;

        const transaction = db.transaction("jobs", 'readonly');
        const objectStore = transaction.objectStore("jobs");
        const tableBody = document.querySelector('#dataTable tbody');

        // Call a separate function to handle cursor success
        populateTable(objectStore, tableBody, location.hash.substring(1));
        db.close();
    };
}

function previewImage(event) {
    if (event.target.files.length > 0) {
        const src = URL.createObjectURL(event.target.files[0]);
        const preview = document.getElementById('file-preview')

        // Set width and height attributes
        preview.width = 150;
        preview.height = 150;
        
        preview.src = src;
        preview.style.display = "block";
        // Save current source to local storage
        const imageUrl = preview.src;

        // Save the image URL to local storage
        localStorage.setItem('profileImageUrl', imageUrl);
    }
}

function loadPreviewImage() {
    // Retrieve the image data from local storage
    const imageData = localStorage.getItem('profileImageUrl');
    const previewImage = document.getElementById('file-preview');

    // Check if the image data exists in local storage
    if (imageData && previewImage) {
        // Set the image data as the source of the <img> element
        previewImage.src = imageData;
        previewImage.alt = 'Uploaded Image';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach click event listener to the document
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('nav-link') &&
            event.target.classList.contains('green-btn') &&
            (event.target.textContent.trim() === "Manage" || event.target.textContent.trim() === "Details")) {
            // Handle click event
            const uniqId = event.target.getAttribute('data-uniqid');
            console.log("Uniq_Id:", uniqId);
            if (uniqId !== null) {
                getRecordById(uniqId)
            }
        }
        if (event.target.matches('#addButton')) {
            addRecord();
        }
        if (event.target.matches('#updateButton')) {
            updateRecord();
        }
        if (event.target.matches('#deleteButton')) {
            deleteRecord();
        }

    });
});

function getRecordById(uniqId) {
    const request = indexedDB.open("JobsDatabase", 1);

    request.onerror = function(event) {
        console.error('Error getting record from database');
        console.error(event);
    };

    request.onsuccess = function(event) {
        const db = event.target.result;

        const transaction = db.transaction("jobs", 'readonly');
        const objectStore = transaction.objectStore("jobs");

        const getRequest = objectStore.get(uniqId);

        getRequest.onsuccess = function(event) {
            const record = event.target.result;
            if (record) {
                console.log("Record found:", record);
                const cellId = ["Company", "Role Category", "Role", "Location", "Industry", "Functional Area", "Job Title", "Job Experience Required", "Job Salary"];
                cellId.forEach(id => {
                    const cell = document.getElementById(id);
                    if (cell) {
                        cell.textContent = record[id];
                    }
                });

                const updateButton = document.getElementById('updateButton');
                const deleteButton = document.getElementById('deleteButton');
                if (updateButton && deleteButton) {
                    updateButton.setAttribute('data-uniqid', uniqId);
                    deleteButton.setAttribute('data-uniqid', uniqId);
                }
            } else {
                console.log("Record not found");
            }

            // Close the connection after all operations are done
            db.close();
        };

        getRequest.onerror = function(event) {
            console.error("Error retrieving record:", event.target.error);
            // Close the connection in case of error as well
            db.close();
        };
    };
}

function updateRecord() {
    const updateButton = document.getElementById('updateButton');
    const uniqid = updateButton.getAttribute("data-uniqid");

    const cellId = ["Company", "Role Category", "Role", "Location", "Industry", "Functional Area", "Job Experience Required", "Job Title", "Job Salary"];

    const request = indexedDB.open("JobsDatabase", 1);

    request.onerror = function(event) {
        console.error("Error opening database:", event.target.error);
    };

    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction("jobs", "readwrite");
        const objectStore = transaction.objectStore("jobs");
        const getRequest = objectStore.get(uniqid);

        getRequest.onsuccess = function(event) {
            const record = event.target.result;
            for (let i = 0; i < cellId.length; i++) {
                record[cellId[i]] = document.getElementById(cellId[i]).textContent.trim();
            }

            const putRequest = objectStore.put(record);

            putRequest.onsuccess = function(event) {
                console.log("Record updated successfully");
            };

            putRequest.onerror = function(event) {
                console.error("Error updating record:", event.target.error);
            };
        };

        getRequest.onerror = function(event) {
            console.error("Error retrieving record:", event.target.error);
        };

        transaction.oncomplete = function() {
            db.close();
        };
    };

    console.log("Updating record...");
    console.log(uniqid);
}


function addRecord() {
    // Get the values from the editable cells
    const companyName = document.getElementById('companyName').textContent.trim();
    const roleCategory = document.getElementById('roleCategory').textContent.trim();
    const role = document.getElementById('role').textContent.trim();
    const location = document.getElementById('location').textContent.trim();
    const industry = document.getElementById('industry').textContent.trim();
    const functionArea = document.getElementById('function').textContent.trim();
    const experience = document.getElementById('experience').textContent.trim();
    const title = document.getElementById('title').textContent.trim();
    const salary = document.getElementById('salary').textContent.trim();
    const uid = generateUID(32)

    // Insert the extracted Json into IndexedDB
    storeDataInIndexedDB([{"Uniq_Id": uid, "Company": companyName, "Role Category": roleCategory, "Role": role, "Location": location, "Industry": industry, "Functional Area": functionArea, "Job Experience": experience, "Job Title": title, "Job Salary": salary}]);
    console.log("Record saved")
}



function deleteRecord() {
    const deleteButton = document.getElementById('deleteButton');
    const uniqid = deleteButton.getAttribute("data-uniqid");

    // Open a connection to the database
    const request = indexedDB.open("JobsDatabase", 1);

    // Handle database open error
    request.onerror = function(event) {
        console.error("Error opening database:", event.target.error);
    };

    // Handle database open success
    request.onsuccess = function(event) {
        const db = event.target.result;

        // Open a transaction with readwrite access
        const transaction = db.transaction("jobs", "readwrite");

        // Get the object store
        const objectStore = transaction.objectStore("jobs");

        // Delete the record using the keypath string
        const deleteRequest = objectStore.delete(uniqid);

        // Handle delete success
        deleteRequest.onsuccess = function(event) {
            console.log("Record deleted successfully");
        };

        // Handle delete error
        deleteRequest.onerror = function(event) {
            console.error("Error deleting record:", event.target.error);
        };

        // Close the transaction and database connection
        transaction.oncomplete = function() {
            db.close();
        };
    };

    console.log("Deleting Record...");
    console.log(uniqid);
}


function generateUID(length) {
    const chars = '0123456789abcdef';
    let uid = '';
    for (let i = 0; i < length; i++) {
        uid += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(uid)
    return uid;
}
