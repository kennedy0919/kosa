package com.mycompany.backendapi.database.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class AccessTokenCheckInterceptor implements HandlerInterceptor {
	
	// 전처리 매서드
	@Override
		public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
				throws Exception {
			log.info("나 전처리 하는중!!"); 
			return true;
		}
	
	
}
 