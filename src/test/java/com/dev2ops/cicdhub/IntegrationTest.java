package com.dev2ops.cicdhub;

import com.dev2ops.cicdhub.config.AsyncSyncConfiguration;
import com.dev2ops.cicdhub.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { CicdhubApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
public @interface IntegrationTest {
}
