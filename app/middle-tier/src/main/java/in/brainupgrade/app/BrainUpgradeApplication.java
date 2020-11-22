package in.brainupgrade.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({ "in.brainupgrade.app" })
@EnableJpaRepositories(basePackages = "in.brainupgrade.app")
public class BrainUpgradeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BrainUpgradeApplication.class, args);
	}

}
