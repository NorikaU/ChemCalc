function mol() {
  let opSelector1 = document.getElementById("start")
  let op1 = opSelector1.options[opSelector1.selectedIndex].text

  let opSelector2 = document.getElementById("end")
  let op2 = opSelector2.options[opSelector2.selectedIndex].text

  let num1 = Number(document.getElementById("num1").value)

  let ans = document.getElementById("ans")

  if (op1 == "# of particles") {
    if (op2 == "# of particles") {
      ans.innerHTML = num1
    } else if (op2 == "# of moles") {
      ans.innerHTML = num1 / 602000000000000000000000
    }
  }
}

function elem() {
  var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium"]

  var symbols = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg"]

  var weights = [1.00797, 4.00260, 6.941, 9.01218, 10.81, 12.011, 14.0067, 15.9994, 18.998403, 20.179, 22.98977, 24.305, 26.98154, 28.0855, 30.97376, 32.06, 35.453, 39.0983, 39.948, 40.08, 44.9559, 47.90, 50.9415, 51.996, 54.9380, 55.847, 58.70, 58.9332, 63.546, 65.38, 69.72, 72.59, 74.9216, 78.96, 79.904, 83.80, 85.4678, 87.62, 88.9059, 91.22, 92.9064, 95.94, 98, 101.07, 102.9055, 106.4, 107.868, 112.41, 114.82, 118.69, 121.75, 126.9045, 127.60, 131.30, 132.9054, 137.33, 138.9055, 140.12, 140.9077, 144.24, 145, 150.4, 151.96, 157.25, 158.9254, 162.50, 164.9304, 167.26, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.85, 186.207, 190.2, 192.22, 195.09, 196.9665, 200.59, 204.37, 207.2, 208.9804, 209, 210, 222, 223, 226.0254, 227.0278, 231.0359, 232.0381, 237.0482, 238.029, 242, 243, 247, 247, 251, 252, 255, 256, 257, 258, 260, 250, 261, 262, 262, 263]

  let e = document.getElementById("element").value

  let sym = document.getElementById("symbol")
  let number = document.getElementById("number")
  let protons = document.getElementById("protons")
  let neutrons = document.getElementById("neutrons")
  let electrons = document.getElementById("electrons")

  sym.innerHTML = symbols[elements.findIndex(e)]
  number.innerHTML = elements.findIndex(e) + 1
  protons.innerHTML = number
  neutrons.innerHTML = weights[elements.findIndex(e)] - number
  electrons.innerHTML = number
}

function mass() {
  var symbols = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg"]

  var weights = [1.00797, 4.00260, 6.941, 9.01218, 10.81, 12.011, 14.0067, 15.9994, 18.998403, 20.179, 22.98977, 24.305, 26.98154, 28.0855, 30.97376, 32.06, 35.453, 39.0983, 39.948, 40.08, 44.9559, 47.90, 50.9415, 51.996, 54.9380, 55.847, 58.70, 58.9332, 63.546, 65.38, 69.72, 72.59, 74.9216, 78.96, 79.904, 83.80, 85.4678, 87.62, 88.9059, 91.22, 92.9064, 95.94, 98, 101.07, 102.9055, 106.4, 107.868, 112.41, 114.82, 118.69, 121.75, 126.9045, 127.60, 131.30, 132.9054, 137.33, 138.9055, 140.12, 140.9077, 144.24, 145, 150.4, 151.96, 157.25, 158.9254, 162.50, 164.9304, 167.26, 168.9342, 173.04, 174.967, 178.49, 180.9479, 183.85, 186.207, 190.2, 192.22, 195.09, 196.9665, 200.59, 204.37, 207.2, 208.9804, 209, 210, 222, 223, 226.0254, 227.0278, 231.0359, 232.0381, 237.0482, 238.029, 242, 243, 247, 247, 251, 252, 255, 256, 257, 258, 260, 250, 261, 262, 262, 263]

  let formula = document.getElementById("formula").value

  let ans = document.getElementById("mass")
  var sum = 0
  for (i = 0; i < formula.length; i++) {
    if ("QWERTYUIOPASDFGHJKLZXCVBNM".includes(formula.charAt(i))) {
      if ("qwertyuiopasdfghjklzxcvbnm".includes(formula.charAt(i + 1))) {
        if ("1234567890".includes(formula.charAt(i + 2))) {
          sum += Number(weights[symbols.findIndex(formula.charAt(i) + formula.charAt(i + 1))]) * Number(formula.charAt(i + 2))
        } else {
          sum += Number(weights[symbols.findIndex(formula.charAt(i) + formula.charAt(i + 1))])
        }
      } else {
        if ("1234567890".includes(formula.charAt(i + 1))) {
          sum += Number(weights[symbols.findIndex(formula.charAt(i))]) * Number(formula.charAt(i + 1))
        } else {
          sum += Number(weights[symbols.findIndex(formula.charAt(i))])
        }
      }
    }
  }
  ans.innerHTML = sum
  
  console.log(sum);
}

function yeild() {
  let num1 = document.getElementById("num1").value
  let num2 = document.getElementById("num2").value
  let num3 = document.getElementById("num3").value

  let ans = document.getElementById("answer")

  let opSelector = document.getElementById("start")
  let op = opSelector.options[opSelector.selectedIndex].text

  if (num1 == "FIND") {
    ans.innerHTML = Number(num2) / Number(num3) * 100
  } else if (num2 = "FIND") {
    ans.innerHTML = Number(num1) * Number(num3) / 100
  } else if (num3 == "FIND") {
    ans.innerHTML = Number(num2) / Number(num1) * 100
  }
}