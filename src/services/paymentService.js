export async function processPayment(amount, method) {
  // Mock implementation for now
  // Later can be integrated with Stripe/PayPal APIs
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!amount || amount <= 0) {
        reject('Invalid amount');
      } else {
        resolve({
          status: 'success',
          method,
          amount,
          transactionId: `TXN-${Date.now()}`,
        });
      }
    }, 1000);
  });
}
