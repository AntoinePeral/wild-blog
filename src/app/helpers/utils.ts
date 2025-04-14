/**
 * Vérifie récursivement si une valeur donnée (string ou number)
 * est présente quelque part dans une structure de données
 * potentiellement imbriquée (objet, tableau, etc.).
 *
 * @param data - La structure à explorer : objet, tableau ou valeur primitive.
 * @param value - La valeur à rechercher (string ou number).
 * @returns true si la valeur est trouvée quelque part dans la structure, sinon false.
 *
 * @example
 * // Exemple 1 : valeur présente dans un objet imbriqué
 * deepContainsValue({ a: 1, b: { c: [2, 3, { d: "hello" }] } }, "hello");
 * // → true
 *
 * @example
 * // Exemple 2 : valeur présente dans un tableau
 * deepContainsValue([10, 20, { name: "Alice" }], "Alice");
 * // → true
 *
 * @example
 * // Exemple 3 : valeur absente
 * deepContainsValue({ x: [1, 2], y: { z: "nope" } }, "hello");
 * // → false
 *
 * @example
 * // Exemple 4 : correspondance directe
 * deepContainsValue("hello", "hello");
 * // → true
 */
export function deepContainsValue(data: any, value: string | number): boolean {
  if (data === value) return true;

  if (Array.isArray(data)) {
    return data.some(item => deepContainsValue(item, value));
  }

  if (typeof data === 'object' && data !== null) {
    return Object.values(data).some(val => deepContainsValue(val, value));
  }

  return false;
}


//✅ Exemple Step by Step + 🧠 Schéma visuel
// Prenons cet exemple :

// const data = {
//   a: 1,
//   b: {
//     c: [2, 3, { d: "hello" }]
//   }
// };

// deepContainsValue(data, "hello"); // ?
// 🔁 Étape par Étape

// Appel initial :
// deepContainsValue(data, "hello")
// // data = { a: 1, b: { c: [2, 3, { d: "hello" }] } }
// Ce n’est ni égal à "hello", ni un tableau ⇒ on passe à l'objet.
// C’est un objet, on prend ses valeurs : [1, { c: [...] }]

// Premier appel récursif :
// deepContainsValue(1, "hello") // false
// Deuxième appel récursif :


// deepContainsValue({ c: [2, 3, { d: "hello" }] }, "hello")
// C’est encore un objet ⇒ on prend sa seule valeur : [[2, 3, { d: "hello" }]]

// Appel suivant :

// deepContainsValue([2, 3, { d: "hello" }], "hello")
// C’est un tableau ⇒ on teste chaque élément :
// deepContainsValue(2, "hello") → false
// deepContainsValue(3, "hello") → false
// deepContainsValue({ d: "hello" }, "hello") → 🔥 Bingo !

// Dernier appel :
// deepContainsValue({ d: "hello" }, "hello")
// C’est un objet ⇒ valeurs = ["hello"]
// deepContainsValue("hello", "hello") → ✅ true

// 🧭 Schéma de Parcours (résumé visuel)
// { a: 1, b: { c: [2, 3, { d: "hello" }] } }
//           |
//           └── { c: [2, 3, { d: "hello" }] }
//                       |
//                       └── [2, 3, { d: "hello" }]
//                                 |
//                                 └── { d: "hello" }
//                                           |
//                                           └── "hello" === "hello" ✅
// ✅ Résultat final :
// deepContainsValue(data, "hello"); // true
