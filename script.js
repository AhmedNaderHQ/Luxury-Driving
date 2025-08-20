const cars = {
    1: {
        id: 1,
        brand: 'Mercedes-Benz',
        name: 'C-Class',
        year: '2024',
        price: 250000,
        image: './images/photo-1555215695-3004980ad54e.jpg',
        specs: [
            '2.0L Turbo Engine',
            '255 Horsepower',
            '9-Speed Automatic',
            'Sport Suspension',
            '11.9" Infotainment Display',
            'LED Digital Lights',
            'Wireless Charging',
            'Burmester® 3D Surround Sound'
        ],
        features: [
            'Panoramic Sunroof',
            'Heated Seats',
            'Blind Spot Assist',
            'Active Parking Assist'
        ]
    },
    2: {
        id: 2,
        brand: 'BMW',
        name: '5 Series',
        year: '2024',
        price: 280000,
        image: './images/photo-1580273916550-e323be2ae537.png',
        specs: [
            '3.0L 6-Cylinder Engine',
            '335 Horsepower',
            'Rear-Wheel Drive',
            'Adaptive Suspension',
            '12.3" Display',
            'Harman Kardon® Audio',
            'BMW Live Cockpit Pro',
            'Gesture Control'
        ],
        features: [
            'M Sport Package',
            'Ventilated Seats',
            'Driving Assistant Pro',
            'Remote Control Parking'
        ]
    },
    3: {
        id: 3,
        brand: 'Audi',
        name: 'A6',
        year: '2024',
        price: 270000,
        image: './images/photo-1619682817481-e994891cd1f5.jpg',
        specs: [
            '2.0L TFSI Engine',
            '261 Horsepower',
            'quattro® AWD',
            'Air Suspension',
            'Bang & Olufsen® Sound',
            'MMI Navigation Plus',
            'Audi Virtual Cockpit',
            'Matrix LED Headlights'
        ],
        features: [
            'S line Package',
            'Massage Seats',
            'Audi Pre Sense',
            'Park Assist Plus'
        ]
    },
    4: {
        id: 4,
        brand: 'Porsche',
        name: 'Panamera',
        year: '2024',
        price: 350000,
        image: './images/photo-1503376780353-7e6692767b70.jpg',
        specs: [
            '2.9L Twin-Turbo V6',
            '325 Horsepower',
            '8-Speed PDK',
            'Adaptive Air Suspension',
            'Porsche Communication Management',
            'BOSE® Surround Sound',
            'Sport Chrono Package',
            'LED Matrix Headlights'
        ],
        features: [
            'Sport Design Package',
            'Ventilated Seats',
            'Night Vision Assist',
            'InnoDrive with ACC'
        ]
    },
    5: {
        id: 5,
        brand: 'Mercedes-Benz',
        name: 'C-Class',
        year: '2024',
        price: 250000,
        image: './images/photo-1555215695-3004980ad54e.jpg',
        specs: [
            '2.0L Turbo Engine',
            '255 Horsepower',
            '9-Speed Automatic',
            'Sport Suspension',
            '11.9" Infotainment Display',
            'LED Digital Lights',
            'Wireless Charging',
            'Burmester® 3D Surround Sound'
        ],
        features: [
            'Panoramic Sunroof',
            'Heated Seats',
            'Blind Spot Assist',
            'Active Parking Assist'
        ]
    },
    6: {
        id: 6,
        brand: 'BMW',
        name: '5 Series',
        year: '2024',
        price: 280000,
        image: './images/photo-1580273916550-e323be2ae537.png',
        specs: [
            '3.0L 6-Cylinder Engine',
            '335 Horsepower',
            'Rear-Wheel Drive',
            'Adaptive Suspension',
            '12.3" Display',
            'Harman Kardon® Audio',
            'BMW Live Cockpit Pro',
            'Gesture Control'
        ],
        features: [
            'M Sport Package',
            'Ventilated Seats',
            'Driving Assistant Pro',
            'Remote Control Parking'
        ]
    },
    7: {
        id: 7,
        brand: 'Audi',
        name: 'A6',
        year: '2024',
        price: 270000,
        image: './images/photo-1619682817481-e994891cd1f5.jpg',
        specs: [
            '2.0L TFSI Engine',
            '261 Horsepower',
            'quattro® AWD',
            'Air Suspension',
            'Bang & Olufsen® Sound',
            'MMI Navigation Plus',
            'Audi Virtual Cockpit',
            'Matrix LED Headlights'
        ],
        features: [
            'S line Package',
            'Massage Seats',
            'Audi Pre Sense',
            'Park Assist Plus'
        ]
    },
    8: {
        id: 8,
        brand: 'Porsche',
        name: 'Panamera',
        year: '2024',
        price: 350000,
        image: './images/photo-1503376780353-7e6692767b70.jpg',
        specs: [
            '2.9L Twin-Turbo V6',
            '325 Horsepower',
            '8-Speed PDK',
            'Adaptive Air Suspension',
            'Porsche Communication Management',
            'BOSE® Surround Sound',
            'Sport Chrono Package',
            'LED Matrix Headlights'
        ],
        features: [
            'Sport Design Package',
            'Ventilated Seats',
            'Night Vision Assist',
            'InnoDrive with ACC'
        ]
    },
    9: {
        id: 9,
        brand: 'Mercedes-Benz',
        name: 'C-Class',
        year: '2024',
        price: 250000,
        image: './images/photo-1555215695-3004980ad54e.jpg',
        specs: [
            '2.0L Turbo Engine',
            '255 Horsepower',
            '9-Speed Automatic',
            'Sport Suspension',
            '11.9" Infotainment Display',
            'LED Digital Lights',
            'Wireless Charging',
            'Burmester® 3D Surround Sound'
        ],
        features: [
            'Panoramic Sunroof',
            'Heated Seats',
            'Blind Spot Assist',
            'Active Parking Assist'
        ]
    },
    10: {
        id: 10,
        brand: 'BMW',
        name: '5 Series',
        year: '2024',
        price: 280000,
        image: './images/photo-1580273916550-e323be2ae537.png',
        specs: [
            '3.0L 6-Cylinder Engine',
            '335 Horsepower',
            'Rear-Wheel Drive',
            'Adaptive Suspension',
            '12.3" Display',
            'Harman Kardon® Audio',
            'BMW Live Cockpit Pro',
            'Gesture Control'
        ],
        features: [
            'M Sport Package',
            'Ventilated Seats',
            'Driving Assistant Pro',
            'Remote Control Parking'
        ]
    },
    11: {
        id: 11,
        brand: 'Audi',
        name: 'A6',
        year: '2024',
        price: 270000,
        image: './images/photo-1619682817481-e994891cd1f5.jpg',
        specs: [
            '2.0L TFSI Engine',
            '261 Horsepower',
            'quattro® AWD',
            'Air Suspension',
            'Bang & Olufsen® Sound',
            'MMI Navigation Plus',
            'Audi Virtual Cockpit',
            'Matrix LED Headlights'
        ],
        features: [
            'S line Package',
            'Massage Seats',
            'Audi Pre Sense',
            'Park Assist Plus'
        ]
    },
    12: {
        id: 12,
        brand: 'Porsche',
        name: 'Panamera',
        year: '2024',
        price: 350000,
        image: './images/photo-1503376780353-7e6692767b70.jpg',
        specs: [
            '2.9L Twin-Turbo V6',
            '325 Horsepower',
            '8-Speed PDK',
            'Adaptive Air Suspension',
            'Porsche Communication Management',
            'BOSE® Surround Sound',
            'Sport Chrono Package',
            'LED Matrix Headlights'
        ],
        features: [
            'Sport Design Package',
            'Ventilated Seats',
            'Night Vision Assist',
            'InnoDrive with ACC'
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    displayCars(cars);
    populateCompareDropdowns();
    populatePreferredCarDropdown();
    setupEventListeners();
});

// Display cars in the grid
function displayCars(carsToShow) {
    const carGrid = document.getElementById('carGrid');
    carGrid.innerHTML = '';
    
    Object.values(carsToShow).forEach(car => {
        const carCard = `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100">
                    <img src="${car.image}" class="card-img-top" alt="${car.brand} ${car.name}">
                    <div class="card-body">
                        <h5 class="card-title">${car.brand} ${car.name}</h5>
                        <p class="card-text">${car.year} Model</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="price">$${car.price.toLocaleString()}</span>
                            <button class="btn btn-primary" onclick="showDetails(${car.id})">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        carGrid.innerHTML += carCard;
    });
}

// Show car details in modal
function showDetails(carId) {
    const car = cars[carId];
    const modalContent = document.getElementById('modalContent');
    const specsList = car.specs.map(spec => `<li>${spec}</li>`).join('');
    const featuresList = car.features.map(feature => `<li>${feature}</li>`).join('');
    
    modalContent.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${car.image}" class="img-fluid rounded" alt="${car.brand} ${car.name}">
            </div>
            <div class="col-md-6">
                <h3>${car.brand} ${car.name}</h3>
                <p class="lead">Model Year: ${car.year}</p>
                <h4 class="price">$${car.price.toLocaleString()}</h4>
                
                <h5 class="mt-4">Specifications:</h5>
                <ul>${specsList}</ul>
                
                <h5 class="mt-4">Features:</h5>
                <ul>${featuresList}</ul>
            </div>
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('carModal'));
    modal.show();
}

// Schedule test drive
function scheduleTestDrive() {
    alert('Thank you for your interest! Our team will contact you shortly to schedule your test drive.');
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterCars);
    document.getElementById('brandFilter').addEventListener('change', filterCars);
    
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    priceRange.addEventListener('input', function() {
        priceValue.textContent = Number(this.value).toLocaleString();
        filterCars();
    });

    document.getElementById('car1').addEventListener('change', updateComparison);
    document.getElementById('car2').addEventListener('change', updateComparison);

    document.getElementById('contactForm').addEventListener('submit', handleContactForm);
}

// Filter cars
function filterCars() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedBrand = document.getElementById('brandFilter').value;
    const maxPrice = Number(document.getElementById('priceRange').value);
    const filteredCars = Object.values(cars).filter(car => {
        const matchesSearch = (car.brand + ' ' + car.name).toLowerCase().includes(searchTerm);
        const matchesBrand = !selectedBrand || car.brand === selectedBrand;
        const matchesPrice = car.price <= maxPrice;
        return matchesSearch && matchesBrand && matchesPrice;
    });
    const filteredCarsObj = {};
    filteredCars.forEach(car => {
        filteredCarsObj[car.id] = car;
    });
    displayCars(filteredCarsObj);
}

// Populate compare dropdowns
function populateCompareDropdowns() {
    const options = Object.values(cars).map(car => 
        `<option value="${car.id}">${car.brand} ${car.name}</option>`
    ).join('');
    document.getElementById('car1').innerHTML += options;
    document.getElementById('car2').innerHTML += options;
}

// Update comparison
function updateComparison() {
    const car1Id = document.getElementById('car1').value;
    const car2Id = document.getElementById('car2').value;
    const car1Details = document.getElementById('car1Details');
    const car2Details = document.getElementById('car2Details');

    if (car1Id) {
        const car = cars[car1Id];
        car1Details.innerHTML = generateComparisonHTML(car);
    } else {
        car1Details.innerHTML = '<p class="text-center">Select a vehicle to compare</p>';
    }
    
    if (car2Id) {
        const car = cars[car2Id];
        car2Details.innerHTML = generateComparisonHTML(car);
    } else {
        car2Details.innerHTML = '<p class="text-center">Select a vehicle to compare</p>';
    }
}

// Generate comparison HTML
function generateComparisonHTML(car) {
    return `
        <div class="text-center mb-4">
            <img src="${car.image}" class="img-fluid rounded mb-3" alt="${car.brand} ${car.name}">
            <h4>${car.brand} ${car.name}</h4>
            <p class="price">$${car.price.toLocaleString()}</p>
        </div>
        <div class="specs-list">
            <h5>Specifications:</h5>
            <ul>
                ${car.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
            <h5 class="mt-4">Features:</h5>
            <ul>
                ${car.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Populate preferred car dropdown
function populatePreferredCarDropdown() {
    const preferredCar = document.getElementById('preferredCar');
    const options = Object.values(cars).map(car => 
        `<option value="${car.id}">${car.brand} ${car.name}</option>`
    ).join(''); 
    preferredCar.innerHTML += options;
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const preferredCar = document.getElementById('preferredCar').value;
    const message = document.getElementById('message').value;
    alert('Thank you for your message! We will contact you shortly.');
    this.reset();
}