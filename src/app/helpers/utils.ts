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
