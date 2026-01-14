package Person;

public class BankAccount {

    static String bankName = "MyBank";
    static int totalAccounts = 0;
    static int accountCounter = 1000; 
    int accountNumber;
    String holderName;
    double balance;

    public BankAccount(String holderName, double balance) {
        this.holderName = holderName;
        this.balance = balance;
        this.accountNumber = ++accountCounter; 
        totalAccounts++;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }

    public double getBalance() {
        return balance;
    }

    public static String getBankInfo() {
        return bankName + " - Total Accounts: " + totalAccounts;
    }

    public static void main(String[] args) {

        BankAccount acc1 = new BankAccount("Alice", 1000);
        BankAccount acc2 = new BankAccount("Bob", 500);

        acc1.deposit(200);
        acc2.withdraw(100);

        System.out.println("Alice Balance: " + acc1.getBalance());
        System.out.println("Bob Balance: " + acc2.getBalance());

        System.out.println(BankAccount.getBankInfo());
    }
}
