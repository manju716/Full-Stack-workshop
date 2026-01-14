package Person;

public class Person {

    private String name;
    private int age;
    private String email;

    
    public Person() {
    }

    public Person(String name, int age, String email) {
        this.name = name;
        setAge(age);       
        setEmail(email);   
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

 
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            System.out.println("Invalid age. Age must be between 0 and 150.");
        }
    }

 
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (email != null && email.contains("@")) {
            this.email = email;
        } else {
            System.out.println("Invalid email. Email must contain '@'.");
        }
    }

    @Override
    public String toString() {
        return "Person {name='" + name + "', age=" + age + ", email='" + email + "'}";
    }

    public static void main(String[] args) {


        Person p1 = new Person();
        p1.setName("Alice");
        p1.setAge(22);
        p1.setEmail("alice@email.com");
        System.out.println(p1);
        Person p2 = new Person("John", 25, "john@email.com");
        p2.setAge(30);
        System.out.println(p2);
    }
}
