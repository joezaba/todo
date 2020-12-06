package io.zaba.todo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.MultiValueMap;

import io.zaba.todo.dtos.AuthenticationRequest;
import io.zaba.todo.dtos.AuthenticationResponse;
import io.zaba.todo.dtos.UserRequest;
import io.zaba.todo.dtos.UserResponse;
import io.zaba.todo.models.User;
import io.zaba.todo.repositories.UserRepository;
import io.zaba.todo.security.MyUserDetailsService;
import io.zaba.todo.security.SecurityConfigurer;
import io.zaba.todo.security.JwtUtil;

@RestController
@RequestMapping(path = "api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SecurityConfigurer securityConfigurer;

    @Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@Autowired
	private MyUserDetailsService userDetailsService;


    @GetMapping("")
    public @ResponseBody Iterable<User> index() {
        return userRepository.findAll();
    }

    @GetMapping("/jwt")
    public @ResponseBody UserResponse getUserByJwt(@RequestHeader("Authorization") String header) {
        
        User user = userRepository.findByUsername(jwtTokenUtil.extractUsername(header.split(" ")[1]));

        return new UserResponse(
            user.getId(),
            user.getUsername()
        );
        
    }

    @PostMapping(path = "/register") // Map ONLY POST Requests
    public @ResponseBody UserResponse addNewTodo(@RequestBody UserRequest userIn) {

        User user = new User(
            userIn.getUsername(), 
            securityConfigurer.passwordEncoder().encode(userIn.getPassword())
        );

        userRepository.save(user);

        return new UserResponse(
            user.getId(),
            user.getUsername()
        );
        
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity<AuthenticationResponse> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

		User user;
		
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
			);
			user = userRepository.findByUsername(authenticationRequest.getUsername());
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt, user));
	}
}
