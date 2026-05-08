import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { TWEEN } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/libs/tween.module.min.js';
import { CSS3DRenderer, CSS3DObject } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/renderers/CSS3DRenderer.js';
import { TrackballControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/TrackballControls.js';

const tableData = [
    "H", "Hydrogen", "1.00794", 1, 1,
    "He", "Helium", "4.002602", 18, 1,
    "Li", "Lithium", "6.941", 1, 2,
    "Be", "Beryllium", "9.012182", 2, 2,
    "B", "Boron", "10.811", 13, 2,
    "C", "Carbon", "12.0107", 14, 2,
    "N", "Nitrogen", "14.0067", 15, 2,
    "O", "Oxygen", "15.9994", 16, 2,
    "F", "Fluorine", "18.998403", 17, 2,
    "Ne", "Neon", "20.1797", 18, 2,
    "Na", "Sodium", "22.98976", 1, 3,
    "Mg", "Magnesium", "24.305", 2, 3,
    "Al", "Aluminium", "26.981538", 13, 3,
    "Si", "Silicon", "28.0855", 14, 3,
    "P", "Phosphorus", "30.973762", 15, 3,
    "S", "Sulfur", "32.065", 16, 3,
    "Cl", "Chlorine", "35.453", 17, 3,
    "Ar", "Argon", "39.948", 18, 3,
    "K", "Potassium", "39.0983", 1, 4,
    "Ca", "Calcium", "40.078", 2, 4,
    "Sc", "Scandium", "44.955912", 3, 4,
    "Ti", "Titanium", "47.867", 4, 4,
    "V", "Vanadium", "50.9415", 5, 4,
    "Cr", "Chromium", "51.9961", 6, 4,
    "Mn", "Manganese", "54.938045", 7, 4,
    "Fe", "Iron", "55.845", 8, 4,
    "Co", "Cobalt", "58.933195", 9, 4,
    "Ni", "Nickel", "58.6934", 10, 4,
    "Cu", "Copper", "63.546", 11, 4,
    "Zn", "Zinc", "65.38", 12, 4,
    "Ga", "Gallium", "69.723", 13, 4,
    "Ge", "Germanium", "72.64", 14, 4,
    "As", "Arsenic", "74.9216", 15, 4,
    "Se", "Selenium", "78.96", 16, 4,
    "Br", "Bromine", "79.904", 17, 4,
    "Kr", "Krypton", "83.798", 18, 4,
    "Rb", "Rubidium", "85.4678", 1, 5,
    "Sr", "Strontium", "87.62", 2, 5,
    "Y", "Yttrium", "88.90585", 3, 5,
    "Zr", "Zirconium", "91.224", 4, 5,
    "Nb", "Niobium", "92.90638", 5, 5,
    "Mo", "Molybdenum", "95.96", 6, 5,
    "Tc", "Technetium", "98", 7, 5,
    "Ru", "Ruthenium", "101.07", 8, 5,
    "Rh", "Rhodium", "102.9055", 9, 5,
    "Pd", "Palladium", "106.42", 10, 5,
    "Ag", "Silver", "107.8682", 11, 5,
    "Cd", "Cadmium", "112.411", 12, 5,
    "In", "Indium", "114.818", 13, 5,
    "Sn", "Tin", "118.71", 14, 5,
    "Sb", "Antimony", "121.76", 15, 5,
    "Te", "Tellurium", "127.6", 16, 5,
    "I", "Iodine", "126.90447", 17, 5,
    "Xe", "Xenon", "131.293", 18, 5,
    "Cs", "Cesium", "132.90545", 1, 6,
    "Ba", "Barium", "137.327", 2, 6,
    "La", "Lanthanum", "138.90547", 3, 9,
    "Ce", "Cerium", "140.116", 4, 9,
    "Pr", "Praseodymium", "140.90765", 5, 9,
    "Nd", "Neodymium", "144.242", 6, 9,
    "Pm", "Promethium", "145", 7, 9,
    "Sm", "Samarium", "150.36", 8, 9,
    "Eu", "Europium", "151.964", 9, 9,
    "Gd", "Gadolinium", "157.25", 10, 9,
    "Tb", "Terbium", "158.92535", 11, 9,
    "Dy", "Dysprosium", "162.5", 12, 9,
    "Ho", "Holmium", "164.93032", 13, 9,
    "Er", "Erbium", "167.259", 14, 9,
    "Tm", "Thulium", "168.93421", 15, 9,
    "Yb", "Ytterbium", "173.054", 16, 9,
    "Lu", "Lutetium", "174.9668", 17, 9,
    "Hf", "Hafnium", "178.49", 4, 6,
    "Ta", "Tantalum", "180.94788", 5, 6,
    "W", "Tungsten", "183.84", 6, 6,
    "Re", "Rhenium", "186.207", 7, 6,
    "Os", "Osmium", "190.23", 8, 6,
    "Ir", "Iridium", "192.217", 9, 6,
    "Pt", "Platinum", "195.084", 10, 6,
    "Au", "Gold", "196.966569", 11, 6,
    "Hg", "Mercury", "200.59", 12, 6,
    "Tl", "Thallium", "204.3833", 13, 6,
    "Pb", "Lead", "207.2", 14, 6,
    "Bi", "Bismuth", "208.9804", 15, 6,
    "Po", "Polonium", "209", 16, 6,
    "At", "Astatine", 17, 6,
    "Rn", "Radon", "222", 18, 6,
    "Fr", "Francium", "223", 1, 7,
    "Ra", "Radium", "226", 2, 7,
    "Ac", "Actinium", "227", 3, 10,
    "Th", "Thorium", "232.03806", 4, 10,
    "Pa", "Protactinium", "231.03588", 5, 10,
    "U", "Uranium", "238.02891", 6, 10,
    "Np", "Neptunium", "237", 7, 10,
    "Pu", "Plutonium", "244", 8, 10,
    "Am", "Americium", "243", 9, 10,
    "Cm", "Curium", "247", 10, 10,
    "Bk", "Berkelium", "247", 11, 10,
    "Cf", "Californium", "251", 12, 10,
    "Es", "Einsteinium", "252", 13, 10,
    "Fm", "Fermium", "257", 14, 10,
    "Md", "Mendelevium", "258", 15, 10,
    "No", "Nobelium", "259", 16, 10,
    "Lr", "Lawrencium", "262", 17, 10,
    "Rf", "Rutherfordium", "267", 4, 7,
    "Db", "Dubnium", "268", 5, 7,
    "Sg", "Seaborgium", "271", 6, 7,
    "Bh", "Bohrium", "272", 7, 7,
    "Hs", "Hassium", "270", 8, 7,
    "Mt", "Meitnerium", "276", 9, 7,
    "Ds", "Darmstadtium", "281", 10, 7,
    "Rg", "Roentgenium", "280", 11, 7,
    "Cn", "Copernicium", "285", 12, 7,
    "Nh", "Nihonium", "286", 13, 7,
    "Fl", "Flerovium", "289", 14, 7,
    "Mc", "Moscovium", "290", 15, 7,
    "Lv", "Livermorium", "293", 16, 7,
    "Ts", "Tennessine", "294", 17, 7,
    "Og", "Oganesson", "294", 18, 7
];

let camera, scene, renderer, controls;
const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        10000
    );

    camera.position.z = 3000;

    scene = new THREE.Scene();

    // LIMPIAR POSICIONES ANTERIORES
    targets.table = [];
    targets.sphere = [];
    targets.helix = [];
    targets.grid = [];

    for (let i = 0; i < tableData.length; i += 5) {
        const element = document.createElement('div');
        element.className = 'element';
        const atomicNumber = (i / 5) + 1;
        if ([1, 6, 7, 8, 15, 16, 34].includes(atomicNumber)) {
            element.classList.add('nonmetal');
        } else if ([2, 10, 18, 36, 54, 86, 118].includes(atomicNumber)) {
            element.classList.add('noble-gas');
        } else if ([9, 17, 35, 53, 85, 117].includes(atomicNumber)) {
            element.classList.add('halogen');
        } else if ([3, 11, 19, 37, 55, 87].includes(atomicNumber)) {
            element.classList.add('alkali');
        } else if ([4, 12, 20, 38, 56, 88].includes(atomicNumber)) {
            element.classList.add('alkaline');
        } else if (
            (atomicNumber >= 57 && atomicNumber <= 71)
        ) {
            element.classList.add('lanthanide');
        } else if (
            (atomicNumber >= 89 && atomicNumber <= 103)
        ) {
            element.classList.add('actinide');
        } else if (
            [5, 14, 32, 33, 51, 52].includes(atomicNumber)
        ) {
            element.classList.add('metalloid');
        } else if (
            [13, 31, 49, 50, 81, 82, 83, 84].includes(atomicNumber)
        ) {
            element.classList.add('post-transition');
        } else {
            element.classList.add('transition-metal');
        }


        // Número atómico
        const number = document.createElement('div');
        number.className = 'number';
        number.textContent = (i / 5) + 1;
        element.appendChild(number);

        // Símbolo
        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = tableData[i];
        element.appendChild(symbol);

        // Nombre
        const details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = `${tableData[i + 1]}<br>${tableData[i + 2]}`;
        element.appendChild(details);

        const object = new CSS3DObject(element);

        // Posición inicial aleatoria
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        objects.push(object);

        // TABLA
        const targetTable = new THREE.Object3D();
        targetTable.position.x = (tableData[i + 3] * 140) - 1330;
        targetTable.position.y = -(tableData[i + 4] * 180) + 990;
        targets.table.push(targetTable);
    }

    // ESFERA
    const vector = new THREE.Vector3();

    for (let i = 0, l = objects.length; i < l; i++) {
        const phi = Math.acos(-1 + (2 * i) / l);

        // Distribución más uniforme
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        const radius = 900; // Más espacio

        const target = new THREE.Object3D();

        target.position.x = radius * Math.cos(theta) * Math.sin(phi);
        target.position.y = radius * Math.sin(theta) * Math.sin(phi);
        target.position.z = radius * Math.cos(phi);

        vector.copy(target.position).multiplyScalar(2);

        target.lookAt(vector);

        targets.sphere.push(target);
    }

    // HÉLICE
    for (let i = 0, l = objects.length; i < l; i++) {
        const theta = i * 0.175 + Math.PI;
        const y = -(i * 12) + 700;

        const target = new THREE.Object3D();

        target.position.x = 900 * Math.sin(theta);
        target.position.y = y;
        target.position.z = 900 * Math.cos(theta);

        vector.x = target.position.x * 2;
        vector.y = target.position.y;
        vector.z = target.position.z * 2;

        target.lookAt(vector);

        targets.helix.push(target);
    }

    // GRID
    for (let i = 0; i < objects.length; i++) {
        const target = new THREE.Object3D();

        target.position.x = ((i % 5) * 400) - 800;
        target.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
        target.position.z = (Math.floor(i / 25)) * 1000 - 2000;

        targets.grid.push(target);
    }

    // RENDERER
    renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    // CONTROLES 3D (ROTAR, ZOOM, MOVER)
    controls = new TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 4;
    controls.minDistance = 500;
    controls.maxDistance = 8000;
    controls.addEventListener('change', render);

    // BOTONES
    document.getElementById('table').addEventListener('click', () => transform(targets.table, 2000));
    document.getElementById('sphere').addEventListener('click', () => transform(targets.sphere, 2000));
    document.getElementById('helix').addEventListener('click', () => transform(targets.helix, 2000));
    document.getElementById('grid').addEventListener('click', () => transform(targets.grid, 2000));

    // RESPONSIVE
    window.addEventListener('resize', onWindowResize);

    // FORMA INICIAL
    transform(targets.table, 2000);
}

function transform(targetList, duration) {
    TWEEN.removeAll();

    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const target = targetList[i];

        new TWEEN.Tween(object.position)
            .to(
                {
                    x: target.position.x,
                    y: target.position.y,
                    z: target.position.z
                },
                Math.random() * duration + duration
            )
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to(
                {
                    x: target.rotation.x,
                    y: target.rotation.y,
                    z: target.rotation.z
                },
                Math.random() * duration + duration
            )
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    }

    new TWEEN.Tween({})
        .to({}, duration * 2)
        .onUpdate(render)
        .start();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();
}

function animate() {
    requestAnimationFrame(animate);

    TWEEN.update();

    controls.update(); // Esto permite rotación en tiempo real
}

function render() {
    renderer.render(scene, camera);
}