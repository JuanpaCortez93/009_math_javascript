const perimetroCuadrado = (lado) => {
  const resultado = lado * 4;
  return resultado;
};

const areaCuadrado = (lado) => {
  const resultado = Math.pow(lado, 2);
  return resultado;
};

// RESULTS

console.group('Cuadrado');
console.log(perimetroCuadrado(4));
console.log(areaCuadrado(4));
console.groupEnd('Cuadrado');

const perimetroTriangulo = (a, b, c) => {
  const resultado = a + b+ c;
  return resultado;
}

const transform_radians = (angle_degrees) => {
  const transform = (a_angle * Math.PI)/180;
  return transform;
}

const areaTriangulo = (a, b, a_angle) => {
  const transform = transform_radians(a_angle);
  const resultado = (a * b * Math.sin(transform)/2);
  return resultado;
}

// RESULTS

console.group('Triángulo');
console.log(perimetroCuadrado(1,2,3));
console.log(areaCuadrado(1,2,90));
console.groupEnd('Triángulo');

const circle_perimeter = (radius) => {
  const resultado = radius * Math.PI;
  return resultado;
}

const circle_area = (radius) => {
  const resultado = Math.pow(radius, 2)* Math.PI;
  return resultado;
}

const circle_vol = (radius) => {
  const resultado = (Math.pow(radius, 3)* Math.PI) / 3;
  return resultado;
}

const inscrit_angle_bca = (bd_cord, dc_cord) => {
  const transform_bd = transform_radians(bd_cord);
  const transform_dc = transform_radians(dc_cord);

  const result = (transform_bd + transform_dc)/2;
  return result;
}

const ex_inscrit_angle_cax = (ab_cord, ac_cord) => {
  const transform_ab = transform_radians(ab_cord);
  const transform_ac = transform_radians(ac_cord);

  const result = (transform_ab + transform_ac)/2;
  return result;
}


// RESULTS

console.group('Circle');
console.log(circle_perimeter(2));
console.log(circle_area(2));
console.log(circle_vol(2));
console.groupEnd('Circle');


const height_formula_triangule = (a_side, b_base) => {
  result = Math.sqrt(Math.pow(a_side,2) - (Math.pow(b_base,2)/4));
  return result;
}


const steward_theorema = (a, b , c, m, n) => {
  const ap = Math.sqrt(((m*Math.pow(b,2)) + (n*Math.pow(c,2) - (m * n * a)))/a);
  return ap;
}

// RESULTS

console.group('height_triangle');
console.log(height_formula_triangule(2,3));
console.groupEnd('Circle');