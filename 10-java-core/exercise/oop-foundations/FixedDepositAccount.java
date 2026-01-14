package Person;

public class FixedDepositAccount extends Account {

    private static final double INTEREST_RATE = 0.07;

    public FixedDepositAccount(String holderName, double balance) {
        super(holderName, balance);
    }

    @Override
    public void withdraw(double amount) {
        throw new UnsupportedOperationException(
                "Withdrawals not allowed for Fixed Deposit Account");
    }

    @Override
    public double calculateInterest() {
        return balance * INTEREST_RATE;
    }
}
