/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return await new Promise((resolve, reject) =>
    setTimeout(() => resolve(millis), millis)
  );
}
