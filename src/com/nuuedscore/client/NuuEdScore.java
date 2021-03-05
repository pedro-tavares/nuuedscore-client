package com.nuuedscore.client;

import java.util.Date;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.nuuedscore.IConstants;
import com.nuuedscore.client.ui.CenterPanel;
import com.nuuedscore.client.ui.MenuPanel;
import com.nuuedscore.client.ui.person.LoggedinPanel;
import com.nuuedscore.client.ui.person.LoginPanel;
import com.nuuedscore.client.ui.person.PersonListPanel;
import com.nuuedscore.shared.dto.Person;

/**
 * NuuEdScore
 * The application entry point
 * 
 * @author PATavares
 * @since Feb 2021
 * 
 */
public class NuuEdScore implements EntryPoint {

	private static NuuEdScore INSTANCE;
	
	private static String HOST;
	private static Person USER;
	
	private static CenterPanel centerPanel = new CenterPanel();
	private static LoginPanel loginPanel = new LoginPanel();
	private static Label poweredByRAILabel = new Label("Powered by R AI");
	private static Image 
		centerImg,
		centerImgLoggedIn;
	private static HorizontalPanel topPanel;
	private static LoggedinPanel loggedinPanel;	
	private static MenuPanel menuPanel = new MenuPanel();
	private static Panel lastViewPanel;
	
	@Override
	public void onModuleLoad() {
//		Window.alert("Powered by R AI");

		INSTANCE = this;

		detectHOST_IP();
		
		//prototypeUI();
		createUI();
		//loginPanel.autoLogin();
		
		doSTUFF();
	}

	public static NuuEdScore GET() {
		return INSTANCE;
	}

	public static Person GET_USER() {
		return USER;
	}
	
	public static String GET_HOST() {
		return HOST;
	}
	
	private void detectHOST_IP() {
		HOST = Window.Location.getHost();
		//Window.alert(HOST);
	}

	private PersonListPanel personPanel;
	
	private void prototypeUI() {
		Button testBtn = new Button("LOGIN");
		testBtn.addClickHandler(event -> {
			if (personPanel == null) {
				personPanel = new PersonListPanel();
			}
			NuuEdScore.GET().showView(personPanel);

		});
		RootPanel.get().add(testBtn, 50, 75);
	}
	
	private void createUI() {
		centerImg = new Image("images/NuuEDScore_Background.png");
		centerImg.setStyleName("centerImgLoggedin");
		RootPanel.get().add(centerImg, 0, 0);
		
		topPanel = new HorizontalPanel();
		topPanel.setStyleName("topPanel");
		//topPanel.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
		topPanel.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
		
		Image logoImg = new Image("images/NuLogo_Small.jpg");
		logoImg.setStyleName("logoImg");
		//logoImg.setPixelSize(400, 75);

		RootPanel.get().add(topPanel, 0, 0);
		
		topPanel.add(logoImg);
		topPanel.setCellHorizontalAlignment(logoImg, HasHorizontalAlignment.ALIGN_LEFT);
		
		topPanel.add(poweredByRAILabel);
		topPanel.setCellHorizontalAlignment(poweredByRAILabel, HasHorizontalAlignment.ALIGN_LEFT);

		poweredByRAILabel.setStyleName("poweredByRAILabel");
		RootPanel.get().add(poweredByRAILabel, 110, 45);
		
		resize();
		
		Window.addResizeHandler(new ResizeHandler() {
			@Override
			public void onResize(ResizeEvent event) {
				resize();				
			}
		});
		
		createCenterPanel();
	}
	
	private void createCenterPanel() {
		RootPanel.get().add(centerPanel, 0, 150);
/*		
		//String userEmail = getCookie();
		String userEmail = "The Architect";
		
		if (userEmail != null) {
			USER = new User();
			USER.setEmail(userEmail);
		
			letsGo(USER.getEmail());
			
		} else {
			topPanel.add(loginPanel);
		}
*/		

		centerPanel.add(loginPanel);
		centerPanel.setCellVerticalAlignment(loginPanel, HasVerticalAlignment.ALIGN_TOP);
		centerPanel.setCellHorizontalAlignment(loginPanel, HasHorizontalAlignment.ALIGN_CENTER);
	}
	
	private static void resize() {
	}
	
	public static void letsGo(String email) {
		
		USER = new Person(email);
		//Window.alert("USER: " + USER.toString());
		setCookie();
		
		//AuditFactory.log(AuditEvent.LOGIN_SUCCESS);
		
		loginPanel.removeFromParent();

		/*
		centerImg.removeFromParent();
		centerImgLoggedIn = new Image("images/background.jpg");
		centerImgLoggedIn.setStyleName("centerImgLoggedin");
		RootPanel.get().add(centerImgLoggedIn, 0, 0);
		*/
		
		topPanel.removeFromParent();
		topPanel.setStyleName("topPanel");
		topPanel.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
		topPanel.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
		//RootPanel.get().add(topPanel, 0, 0);
		
		loggedinPanel = new LoggedinPanel(USER);
		loggedinPanel.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
		topPanel.add(loggedinPanel);
		
		doMenu();
	}
	
	public static void logOut() {
		//deleteCookie();
		
		/*
		centerImgLoggedIn.removeFromParent();
		centerImg = new Image("images/background.jpg");
		centerImg.setStyleName("centerImg");
		RootPanel.get().add(centerImg, 0, 0);
		*/
		
		menuPanel.removeFromParent();
		if (lastViewPanel != null) {
			lastViewPanel.removeFromParent();
		}
		
		//loginPanel.clear();
		topPanel.remove(loggedinPanel);
		topPanel.add(loginPanel);
		
		//AuditFactory.log(AuditEvent.LOGOUT);
	}
	
	private static void setCookie() {
		if (Cookies.isCookieEnabled()) {
			final long DURATION = 1000 * 60 * 60 * 24 * 7; //duration remembering login - 1 week
			Date expires = new Date(System.currentTimeMillis() + DURATION);
	
			Cookies.setCookie(IConstants.NUUEDSCORE_COOKIE_NAME, USER.getEmail(), expires, null, "/", false);
		}
	}
	
	private static String getCookie() {
		if (Cookies.isCookieEnabled()) {
			return Cookies.getCookie(IConstants.NUUEDSCORE_COOKIE_NAME);
		}
		return null;
	}
	
	private static void deleteCookie() {
		if (Cookies.isCookieEnabled()) {
			Cookies.removeCookie(IConstants.NUUEDSCORE_COOKIE_NAME);
		}
	}
	
	private static void doMenu() {
		RootPanel.get().add(menuPanel, 400, 12);
//		 resize();
	}

	public void showView(Panel viewPanel) {		
		if (centerImgLoggedIn != null) {
			centerImgLoggedIn.removeFromParent();
		}
		if (lastViewPanel != null) {
			lastViewPanel.removeFromParent();
		}
		//Window.alert("showView:\n" + viewPanel.toString());
		lastViewPanel = viewPanel;
		//viewPanel.setPixelSize(Window.getClientWidth()-200, Window.getClientHeight()-75);
		if (topPanel != null) {
			RootPanel.get().add(viewPanel, 0, 76);
		} else {
			RootPanel.get().add(viewPanel, 0, 0);
		}
	}

	// EXPERIMENTS *************************************************************************************************
	private void doSTUFF() {
		
	}
}
